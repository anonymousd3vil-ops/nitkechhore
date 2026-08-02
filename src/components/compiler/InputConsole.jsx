function InputConsole({ input, setInput }) {

    return (
        <div className="h-full flex flex-col">

            <div className="px-4 py-2 border-b border-base-300 font-primary">
                <h3 className="font-semibold text-sm">
                    INPUT
                </h3>
            </div>

            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter input for your program..."
                className="textarea flex-1 resize-none rounded-none focus:outline-none text-sm textarea-ghost font-primary"
            />
        </div>
    );
}

export default InputConsole;