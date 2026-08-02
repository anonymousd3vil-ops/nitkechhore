import axios from "axios";
import { encodeBase64, JUDGE0_API_URL } from "../helpers/comiplerHelpers.js";


async function submitCode({languageId, code, stdin}){
    try{
        const response = await axios.post(`${JUDGE0_API_URL}/submissions?base64_encoded=true&wait=false`, {
            source_code: encodeBase64(code),
            language_id: languageId,
            stdin: encodeBase64(stdin),
            cpu_time_limit: 2,
            wall_time_limit: 5
        },{
            headers: {
                "Content-Type": "application/json"
            },
            timeout: 10000
        }
        );
        // console.log(response.data)
        return response;

    }catch(err){
        console.log(err.message)
    }
}

async function getResponse({token}){
    try{
        const result = await axios.get(`${JUDGE0_API_URL}/submissions/${token}`, {
            params: {
                base64_encoded: true,
                fields: "stdout,stderr,compile_output,message,status,time,memory,exit_code"
            },
            timeout: 10000
        });

        return result;

    }catch(err){
        console.log(err.message);
    }
}

export {
    submitCode,
    getResponse
}