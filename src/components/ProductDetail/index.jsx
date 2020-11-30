import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    let { id } = useParams();
    const API_URL = `http://localhost:1337/products/${id}`;
    const [product, setProduct] = useState({});

    useEffect(() => {
        function fetchData() {
            axios
                .get(API_URL)
                .then((res) => setProduct(res.data))
                .catch((err) => console.log(err));
        }
        fetchData();
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="container mx-auto my-10">
            <div className="grid grid-cols-4 gap-4">
                <div className="">
                    <img
                        src={product.img_url}
                        alt=""
                        className="w-full rounded-lg"
                    />
                </div>
                <div className="col-span-3 bg-gray-200 rounded-md h-full p-6">
                    <h2 className="text-secondary font-bold text-3xl">
                        {product.name}
                    </h2>
                    <p className="">
                        Danh mục:&nbsp;
                        <span className="font-bold text-sm uppercase text-gray-600">
                            {product.category.title}
                        </span>
                    </p>
                    <p className="text-lg">Chi tiết sản phẩm: {product.description}</p>

                    <p>Giá sản phẩm: <span className="text-red-700 font-bold">{product.price} VND</span></p>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
