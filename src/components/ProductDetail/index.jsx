import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productApi } from "api";
import { useDispatch, useSelector } from "react-redux";
import { addNewCartItem, increaseCartItem } from "redux/actions/cart";

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({});

    const dispatch = useDispatch();

    const handleClickAddToCart = (product) => {
        const action = addNewCartItem(product);
        dispatch(action);
    };
    const handleClickIncreaseCartItem = (product) => {
        const action = increaseCartItem(product);
        dispatch(action);
    };

    const cartItems = useSelector((state) => state.cart.cartItems);

    function isInCart(product) {
        return !!cartItems.find((item) => item.id === product.id);
    }

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
                            {product.category && product.category.title}
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

                    {!isInCart(product) && (
                        <button
                            className="max-w-1/2 px-4 py-2 border-2 border-red-600 hover:bg-primary hover:text-white rounded-xl text-center font-bold text-primary focus:outline-none"
                            onClick={() => handleClickAddToCart(product)}
                        >
                            Thêm vào giỏ
                        </button>
                    )}

                    {isInCart(product) && (
                        <button
                            className="max-w-1/2 px-4 py-2 border-2 border-blue-400 hover:text-primary rounded-xl text-center font-bold text-secondary focus:outline-none"
                            onClick={() => handleClickIncreaseCartItem(product)}
                        >
                            Tăng số lượng
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
