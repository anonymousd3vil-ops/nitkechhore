import Editor from "@monaco-editor/react";

function CodeEditor({ code, setCode, language }) {

    return (
        <Editor
            height="100%"
            language={language}
            value={code}
            onChange={(value) => {
                setCode(value || "");
            }}
            theme="vs-dark"
            options={{
                fontSize: 15,
                minimap: {
                    enabled: false
                },
                automaticLayout: true,
                scrollBeyondLastLine: false,
                wordWrap: "on",
                tabSize: 4,
                padding: {
                    top: 15
                }
            }}
        />
    );
}

export default CodeEditor;