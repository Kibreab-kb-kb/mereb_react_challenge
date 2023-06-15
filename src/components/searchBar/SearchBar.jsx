import React, { useState } from "react";
import Button from "../Button/Button";

const SearchBar = ({ onClick }) => {
    const [char, setChar] = useState();
    return (
        <div className="rounded-full overflow-hidden w-96 border-violet-600/20 border-2 py-0.5 bg-white flex justify-between items-center gap-6 ">
            <input
                className="outline-none px-4 py-1 w-40 rounded text-neutral-800"
                placeholder="Search character"
                onChange={(e) => {
                    setChar(e.target.value);
                    if (e.target.value == "") {
                        onClick(null);
                    }
                }}
                onKeyDown={(e) => {
                    if (e.key.toLowerCase() === "enter") onClick(char);
                }}
                value={char}
            />
            <div
                className="hover:bg-violet-800 cursor-pointer hover:scale-[1.01] hover:shadow w-20 bg-gradient-to-b from-violet-600 to-violet-800 h-8 rounded-full px-4 py-2 items-center flex text-center text-white"
                onClick={() => {
                    onClick(char);
                }}
            >
                Search
            </div>
        </div>
    );
};

export default SearchBar;
