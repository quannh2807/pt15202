import React, { useState, useRef } from "react";

const SearchForm = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const typingTimeOutRef = useRef(null);

    function handleSearchTermChange(e) {
        setSearchTerm(e.target.value);

        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current);
        }

        typingTimeOutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm,
            };
            onSubmit(formValue);
        }, 300);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <h3 className="my-2 text-secondary">Tìm kiếm sản phẩm</h3>

            <div className="">
                <input
                    type="text"
                    placeholder="Tìm kiếm"
                    name="search"
                    defaultValue={searchTerm}
                    onChange={handleSearchTermChange}
                    className="bg-gray-400 w-full rounded-xl text-gray-700"
                />
            </div>
        </form>
    );
};

export default SearchForm;
