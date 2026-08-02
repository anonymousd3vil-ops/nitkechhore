import { useState } from "react";
import axios from "axios";

import CodeEditor from "../components/compiler/CodeEditor";
import LanguageSelector from "../components/compiler/LanguageSelector";
import InputConsole from "../components/compiler/InputConsole";
import OutputConsole from "../components/compiler/OutputConsole";

import { COMPILER_LANGUAGES } from "../constants/compilerLanguages";
import MainLayout from "../layout/mainLayout";
import { IoCodeSlash } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";
import toast from "react-hot-toast";

function Compiler() {
    const [language, setLanguage] = useState("cpp");

    const [code, setCode] = useState(
        COMPILER_LANGUAGES.cpp.defaultCode
    );

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Change programming language
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        setCode(
            COMPILER_LANGUAGES[newLanguage].defaultCode
        );
        setOutput("");
        setError("");
    };

    // Run Code
    const runCode = async () => {
        try {
            setLoading(true);
            setOutput("");
            setError("");

            const response = await axios.post("/api/compiler/execute",{
                language,
                code,
                stdin: input
            });

            const data = response.data;

            if (data.success) {
                setOutput(
                    data.output || "Program finished with no output."
                );
                if (data.error) {
                    setError(data.error);
                }
            } else {
                setError(
                    data.message || "Unable to execute code."
                );
            }

        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Something went wrong while executing the code.")

        } finally {
            setLoading(false);
        }
    };

    return (
        <MainLayout>
            <div className="min-h-screen bg-base-100 px-4 py-10">
                <div className="max-w-[1600px] mx-auto">

                    {/* HEADER */}
                    <div className="bg-base-100 border border-base-300 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl md:flex-row flex-col">
                        <div>
                            <h1 className="font-extrabold text-lg md:text-2xl flex items-center gap-3 font-primary">
                                <IoCodeSlash className="text-4xl font-bold" /> NITKeChhore Compiler
                            </h1>
                            <p className="text-xs opacity-60 hidden sm:block font-secondary">
                                Write, compile and execute your code
                            </p>
                        </div>
                        <div className="flex items-center gap-3 font-primary">
                            <LanguageSelector
                                language={language}
                                setLanguage={changeLanguage}
                                languages={COMPILER_LANGUAGES}
                            />

                            <button
                                onClick={runCode}
                                disabled={loading}
                                className="btn btn-success border-0 rounded-xl text-white bg-primary btn-sm font-primary text-xl"
                            >
                                {loading ? (
                                    <>
                                        <span className="loading loading-spinner loading-xs"></span>
                                        Running
                                    </>
                                ) : (
                                    <>
                                        <FaRunning/> Run
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* COMPILER AREA */}
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] border-x border-b border-base-300 bg-base-100 overflow-hidden font-primary">
                        
                        {/* CODE EDITOR */}
                        <div className="h-125 lg:h-[75vh] border-b lg:border-b-0 lg:border-r border-base-300 " >
                            <CodeEditor
                                code={code}
                                setCode={setCode}
                                language={
                                    COMPILER_LANGUAGES[language].monacoLanguage
                                }
                            />
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="grid grid-rows-2 h-125 lg:h-[75vh] ">

                            {/* INPUT */}
                            <div className="overflow-hidden border-b border-base-300">
                                <InputConsole input={input} setInput={setInput} />
                            </div>

                            {/* OUTPUT */}
                            <div className="overflow-hidden">
                                <OutputConsole output={output} error={error} loading={loading}/>
                            </div>
                        </div>
                    </div>

                    {/* STATUS */}
                    <div className="mt-2 text-xs opacity-60">
                        {COMPILER_LANGUAGES[language].name}
                        {" • "}
                        {loading ? "Executing..." : "Ready"}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Compiler;