import { useState } from "react";

function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed) return;
        onSearch(trimmed);
        setInput('');
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="flex gap-6 w-full md:w-1/2 lg:1/4 ">
                <input
                    className="pr-2 border rounded-sm"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="px-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500"
                    type="Submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;