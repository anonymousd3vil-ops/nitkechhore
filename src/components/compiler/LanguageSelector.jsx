function LanguageSelector({ language, setLanguage, languages }) {

    return (
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="select select-bordered select-sm bg-base-200 cursor-pointer"
        >
            {Object.entries(languages).map(([key, value]) => (
                <option key={key} value={key}>
                    {value.name}
                </option>
            ))}
        </select>
    );
}

export default LanguageSelector;