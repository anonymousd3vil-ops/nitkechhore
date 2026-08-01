/* eslint-disable no-undef */
import axios from "axios";
// import AppError from "../utils/errorUtils";

const JUDGE0_API_URL = process.env.JUDGE0_API_URL || "https://ce.judge0.com";

const LANGUAGE_IDS = { 
    c: 50,
    cpp: 54,
    python: 71
};

// Convert normal string → Base64
const encodeBase64 = (text = "") => {
    return Buffer.from(text, "utf8").toString("base64");
};

// Convert Base64 → normal string
const decodeBase64 = (text) => {
    if (!text) {
        return "";
    }
    return Buffer.from(text, "base64").toString("utf8");
};

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const executeCode = async (req, res) => {
    try {
        const { language, code, stdin = "" } = req.body;

        if (!language || !code) {
            // return next(new AppError("Please enter code or Select language.", 400))
            return res.status(400).json({
                success: false,
                message: "Language and code are required."
            });
        }

        if (code.length > 50000) {
            // return next(new AppError("Code Length Shulld be less than 50000 Chars", 400))
            return res.status(400).json({
                success: false,
                message: "Code is too large."
            });

        }
        const languageId = LANGUAGE_IDS[language];

        if (!languageId) {
            // return next(new AppError("Slect Valid Language.", 400))
            return res.status(400).json({
                success: false,
                message: "Unsupported programming language."
            });

        }

        // STEP 1 — CREATE JUDGE0 SUBMISSION
        const submissionResponse = await axios.post(
            `${JUDGE0_API_URL}/submissions?base64_encoded=true&wait=false`,
            {
                source_code: encodeBase64(code),
                language_id: languageId,
                stdin: encodeBase64(stdin),
                cpu_time_limit: 2,
                wall_time_limit: 5
            },
            {
                headers: {
                    "Content-Type": "application/json"
                },
                timeout: 10000
            }
        );

        const token = submissionResponse.data.token;

        if (!token) {
            throw new Error("Judge0 did not return a submission token.");
        }

        // STEP 2 — WAIT FOR EXECUTION

        let result = null;

        const MAX_ATTEMPTS = 10;

        for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++){
            await sleep(700);
            const resultResponse = await axios.get(
                `${JUDGE0_API_URL}/submissions/${token}`,
                {
                    params: {
                        base64_encoded: true,
                        fields: "stdout,stderr,compile_output,message,status,time,memory,exit_code"
                    },
                    timeout: 10000
                }
            );

            result = resultResponse.data;

            // 1 = In Queue
            // 2 = Processing

            if(result.status?.id !== 1 && result.status?.id !== 2){
                break;
            }
        }

        // TIMEOUT

        if (!result || result.status?.id === 1 || result.status?.id === 2) {
            return res.status(408).json({
                success: false,
                message: "Code execution timed out."
            });
        }

        // DECODE JUDGE0 RESPONSE

        const stdout = decodeBase64(result.stdout);
        const stderr = decodeBase64(result.stderr);
        const compileOutput = decodeBase64(result.compile_output);
        const message = decodeBase64(result.message);

        // Compilation errors get priority
        const error = compileOutput || stderr ||  message || "";

        // SEND RESULT TO REACT

        return res.status(200).json({
            success: true,
            output: stdout,
            error,
            status: result.status?.description || "",
            statusId: result.status?.id,
            time: result.time,
            memory: result.memory,
            exitCode: result.exit_code
        });

    } catch (error) {
        console.error("Judge0 Compiler Error:", error.response?.data || error.message);
        if (error.response?.status === 429) {
            return res.status(429).json({
                success: false,
                message:
                    "Compiler is currently busy. Please try again shortly."
            });
        }

        if (error.code === "ECONNABORTED") {
            return res.status(504).json({
                success: false,
                message: "Compiler service timed out."
            });
        }

        return res.status(500).json({
            success: false,
            message: error.response?.data?.error || error.response?.data?.message || "Unable to execute code."
        });
    }
};