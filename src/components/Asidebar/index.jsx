import React, { useState, useEffect } from "react";
import axios from "axios";

const Asidebar = () => {
    const API_URL = "http://localhost:1337/categories";
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        function fetchData() {
            axios
                .get(API_URL)
                .then((res) => setCategories(res.data))
                .catch((err) => console.log(err));
        }

        fetchData();
    }, []);

    return (
        <aside className="border border-gray-300 p-4 bg-gray-200 rounded">
            <div className="border-b border-gray-500 flex justify-between items-center">
                <h3 className="font-bold text-secondary text-xl">
                    Lọc sản phẩm
                </h3>

                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#25a2c3"
                        height="20"
                        width="20"
                    >
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                    </svg>
                </div>
            </div>

            <div>
                <h3 className="my-2 text-secondary">Tìm kiếm sản phẩm</h3>

                <div className="">
                    <input
                        type="text"
                        placeholder="Tìm kiếm"
                        className="bg-gray-400 w-full rounded-xl text-gray-700"
                    />
                </div>

                <h3 className="my-2 text-secondary">Danh mục sản phẩm</h3>

                <form action="">
                    <select
                        name=""
                        id=""
                        className="w-full rounded-xl bg-gray-400 text-gray-700 font-bold"
                    >
                        {categories.map((cate, index) => (
                            <option value={cate.id} key={index}>
                                {cate.title}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
        </aside>
    );
};

export default Asidebar;
