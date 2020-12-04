import React, { useEffect, useState } from "react";
import { productApi } from "api";
import Product from "../Product";

const Recent = () => {
    const [recentProduct, setRecentProduct] = useState([]);

    useEffect(() => {
        const params = {
            _sort: "created_at:desc",
            _limit: 4,
        };
        const fetchData = async () => {
            const res = await productApi.getAll(params);
            setRecentProduct(res);
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
