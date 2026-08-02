function OutputConsole({ output, error, loading }) {

    return (
        <div className="h-full flex flex-col">

            <div className="px-4 py-2 border-b border-base-300 flex justify-between font-primary">
                <h3 className="font-semibold text-sm">
                    OUTPUT
                </h3>
                {loading && (
                    <span className="loading loading-spinner loading-xs font-primary"></span>
                )}
            </div>

            <pre className={`flex-1 p-4 overflow-auto font-primary text-sm whitespace-pre-wrap ${error ? "text-error" : ""}`}>
                {loading ? "Running your code..." : error || output || "Run your code to see the output."}
            </pre>
        </div>
    );
}

export default OutputConsole;