import React, { useContext } from "react";
import Swal from "sweetalert2";
import { CartContext } from "contexts/Cart";

import { plusIcon, minusIcon } from "constants/Images";

const CartItem = ({ item, position }) => {
    const { removeItem, increaseQuantity, decreaseQuantity } = useContext(
        CartContext
    );

    return (
        <div className="flex justify-between py-6 items-center border-b border-gray-300">
            <div>
                <img src={item.img_url} alt="" className="rounded-2xl w-full" />
            </div>

            <div>
                <h3 className="text-secondary font-bold text-xl">
                    {item.name}
                </h3>
            </div>

            <div>
                <p>
                    <span className="font-bold">Giá:</span> {item.price} VND
                </p>
            </div>
            <div className="flex justify-between items-center">
                <p className="mx-1 font-bold">Số lượng:</p>

                <button
                    className="mx-1 focus:outline-none"
                    onClick={() => decreaseQuantity(item.id)}
                >
                    <img src={minusIcon} alt="" width={30} />
                </button>

                <span className="mx-1">{item.quantity}</span>

                <button
                    className="mx-1 focus:outline-none"
                    onClick={() => increaseQuantity(item.id)}
                >
                    <img src={plusIcon} alt="" width={30} />
                </button>
            </div>

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
