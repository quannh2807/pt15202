import React, { useState, useEffect } from "react";
import axios from "axios";

import Product from "../../components/Product";
import Asidebar from "../../components/Asidebar";
import Pagination from "../../components/Pagination";

const StorePage = () => {
    const API_URL = `http://localhost:1337/products`;

    const [listPost, setListPost] = useState([]);

    const [pagination, setPagination] = useState({
        start: 1,
        limit: 3,
        current_page: 1,
    });
    const [totalProduct, setTotalProduct] = useState(0);

    useEffect(() => {
        function countProduct() {
            axios
                .get(`${API_URL}/count`)
                .then((res) => setTotalProduct(res.data));
        }

        countProduct();
    }, []);

    useEffect(() => {
        function fetchProducts() {
            fetch(
                `${API_URL}?_start=${pagination.start}&_limit=${pagination.limit}`
            )
                .then((res) => res.json())
                .then((data) => setListPost(data))
                .catch((error) => console.log(error));
        }

        fetchProducts();
    }, [pagination]);

    function handlePageChange(newStart) {
        console.log(newStart);
        let newPage;
        if (newStart > pagination.start) {
            newPage = pagination.current_page + 1;
        } else if (newStart < pagination.start) {
            newPage = pagination.current_page - 1;
        }

        setPagination({
            ...pagination,
            current_page: newPage,
            start: newStart,
        });
    }

    return (
        <section className="container mx-auto mt-6 mb-5">
            <h2 className="text-secondary font-bold text-3xl pb-6">
                Tất cả sản phẩm
            </h2>

            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-1">
                    <Asidebar />
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-3 gap-x-2 gap-y-4">
                        {listPost.map((product, index) => (
                            <Product product={product} key={index} />
                        ))}
                    </div>
                </div>
            </div>

            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
                totalProduct={totalProduct}
            />
        </section>
    );
};

export default StorePage;
