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
        <div className="max-w-4xl mx-auto p-6">
            <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                    className="flex-1 border rounded-xl px-4 py-1 outline-none focus:border-amber-400 focus:ring-1 focus:ring-orange-700"
                    type="text"
                    value={input}
                    placeholder="Search Cities..."
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="px-6 rounded-xl bg-orange-400 text-white hover:bg-orange-500 transition hover:cursor-pointer"
                    type="Submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;