import { useState } from "react";
import "../styles/components/SearchBar.css"

import { IoSearchCircleOutline } from "react-icons/io5";

function SearchBar() {
    const [query, setQuery] = useState("");

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
        </div>
    );
}

export default SearchBar;