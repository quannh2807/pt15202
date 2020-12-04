import React, { useContext } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../../contexts/Cart";

const CartItem = ({ product, position }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="flex justify-between py-6 items-center border-b border-gray-300">
            <div className="w-1/4">
                <img
                    src={product.img_url}
                    alt=""
                    className="rounded-2xl w-full"
                />
            </div>

            <div className="w-2/4">
                <h3 className="text-secondary font-bold text-xl">
                    {product.name}
                </h3>
            </div>

            <div>
                <p>Giá: {product.price} VND</p>
            </div>

            {/* <div onClick={() => removeItem(position)}> */}
            <div
                onClick={() =>
                    Swal.fire({
                        title: "Bạn chắc chắn chưa?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Xóa sản phẩm!",
                        cancelButtonText: "Hủy",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                "Đã xóa",
                                "Sản phẩm đã xóa khỏi giỏ hàng.",
                                "success"
                            ).then(() => removeItem(position));
                        }
                    })
                }
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ff7d7d"
                    height="35"
                    width="35"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default CartItem;
