import React from "react";

const FilterCategory = ({ categories, onCategoryChange }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <h3 className="my-2 text-secondary">Danh mục sản phẩm</h3>
            <select
                name="cate_id"
                className="w-full rounded-xl bg-gray-400 text-gray-700 font-bold"
                onChange={onCategoryChange}
            >
                <option>Chọn danh mục</option>
                {categories.map((cate, index) => (
                    <option value={cate.id} key={index}>
                        {cate.title}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default FilterCategory;
