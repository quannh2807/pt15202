import React from "react";

const Pagination = ({ pagination, onPageChange, totalProduct }) => {
    const { start, limit, current_page } = pagination;
    const totalPage = Math.ceil(totalProduct / limit);

    return (
        <div className="flex justify-center items-center mt-5">
            <button
                disabled={current_page <= 1}
                onClick={() => onPageChange(start - limit)}
                className="font-bold text-gray-700 px-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    height="30"
                    width="30"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                    />
                </svg>
            </button>

            <button
                disabled={current_page >= totalPage}
                onClick={() => onPageChange(start + limit)}
                className="font-bold text-gray-700 px-1"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    height="30"
                    width="30"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
