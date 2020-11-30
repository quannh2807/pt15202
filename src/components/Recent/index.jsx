import React, { useEffect, useState } from "react";
import axios from "axios";

import Product from "../Product";

const Recent = () => {
    const [recentProduct, setRecentProduct] = useState([]);
    const API_URL =
        "http://localhost:1337/products?_sort=created_at:desc&_limit=4";
    useEffect(() => {
        const fetchData = () => {
            axios
                .get(API_URL)
                .then((res) => setRecentProduct(res.data))
                .catch((err) => console.log(err));
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto py-10">
            <h3 className="font-bold text-3xl text-secondary ">
                Sản phẩm mới nhất
            </h3>
            <section className="py-5 grid grid-cols-4 gap-4">
                {recentProduct.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            </section>
        </div>
    );
};

export default Recent;
