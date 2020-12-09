import React, { useState, useEffect } from "react";
import { productApi, categoryApi } from "api";

import FilterCategory from "components/FilterCategory";
import Product from "components/Product";
import Pagination from "components/Pagination";

const StorePage = () => {
    const [filterProduct, setFilterProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [totalProduct, setTotalProduct] = useState();

    const [filters, setFilters] = useState({
        start: 0,
        limit: 6,
        current_page: 1,
        cate_id: null,
    });

    // Count total product
    useEffect(() => {
        const countProduct = async () => {
            const res = await productApi.count();
            setTotalProduct(res);
        };

        countProduct();
    }, []);

    // fetch Data
    useEffect(() => {
        const fetchProducts = async () => {
            // reset state

            let params = {
                _start: filters.start,
                _limit: filters.limit,
            };
            if (filters.cate_id && filters.cate_id !== null) {
                params = {
                    "category.id_eq": filters.cate_id,
                    ...params,
                };
            }

            const res = await productApi.getAll(params);
            setFilterProduct(res);
        };

        fetchProducts();
    }, [filters]);

    // get category
    useEffect(() => {
        const fetchData = async () => {
            const res = await categoryApi.getAll();
            setCategories(res);
        };

        fetchData();
    }, []);

    const handlePageChange = (newStart) => {
        let newPage;
        if (newStart > filters.start) {
            newPage = filters.current_page + 1;
        } else if (newStart < filters.start) {
            newPage = filters.current_page - 1;
        }

        setFilters({
            ...filters,
            current_page: newPage,
            start: newStart,
        });
    };

    const handleCategoryChange = (e) => {
        let newCateID = e.target.value;

        if (newCateID) {
            setFilters({
                ...filters,
                cate_id: Number(newCateID),
            });
        }
    };

    return (
        <section className="container mx-auto mt-6 mb-5">
            <h2 className="text-secondary font-bold text-3xl pb-6">
                Tất cả sản phẩm
            </h2>

            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-1">
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
                            <FilterCategory
                                categories={categories}
                                onCategoryChange={handleCategoryChange}
                            />
                        </div>
                    </aside>
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-3 gap-x-2 gap-y-4">
                        {filterProduct.map((product, index) => (
                            <Product product={product} key={index} />
                        ))}
                    </div>
                </div>
            </div>

            <Pagination
                pagination={filters}
                onPageChange={handlePageChange}
                totalProduct={totalProduct}
            />
        </section>
    );
};

export default StorePage;
