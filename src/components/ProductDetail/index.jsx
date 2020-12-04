import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productApi } from "api";

import { CartContext } from "contexts/Cart";

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await productApi.get(id);
            setProduct(res);
        };

        fetchData();
    }, [id]);

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
                        <span className="font-bold uppercase text-sm">
                            Danh mục:
                        </span>
                        &nbsp;
                        <span className="font-bold text-sm uppercase text-gray-700">
                            {product.category.title}
                        </span>
                    </p>
                    <p className="text-lg">
                        <span className="font-bold uppercase text-sm">
                            Chi tiết sản phẩm:
                        </span>
                        <br />
                        <span className="text-base text-gray-700">
                            {product.description}
                        </span>
                    </p>

                    <p>
                        <span className="font-bold uppercase text-sm">
                            Giá sản phẩm:
                        </span>
                        &nbsp;
                        <span className="text-red-700 font-bold">
                            {product.price} VND
                        </span>
                    </p>

                    <CartContext.Consumer>
                        {({ addToCart }) => (
                            <button
                                className="btn-orange mt-2"
                                onClick={() => addToCart(product)}
                            >
                                Thêm vào giỏ hàng
                            </button>
                        )}
                    </CartContext.Consumer>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
