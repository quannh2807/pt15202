import { minusIcon, plusIcon } from "constants/Images";
import { formatCash } from "constants/Others";
import React from "react";
import { useDispatch } from "react-redux";
import {
    decreateCartItem,
    increaseCartItem,
    removeCartItem,
} from "redux/actions/cart";
import Swal from "sweetalert2";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleClickRemoveItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const action = removeCartItem(item);
                dispatch(action);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    const handleIncreaseItem = (item) => {
        const action = increaseCartItem(item);
        dispatch(action);
    };
    const handleDecreaseItem = (item) => {
        const action = decreateCartItem(item);
        dispatch(action);
    };

    return (
        <div className="flex justify-between py-6 items-center border-b border-gray-300">
            <div>
                <img src={item.img_url} className="rounded-2xl w-full" alt="" />
            </div>

            <div>
                <h3 className="text-secondary font-semibold text-xl">
                    {item.name}
                </h3>
            </div>

            <div>
                Giá:&nbsp;
                <span className="font-semibold">
                    {formatCash(`${item.price}`)} VND
                </span>
            </div>
            <div className="flex justify-between items-center">
                <p className="mx-1">Số lượng: </p>

                <span className="mx-1 font-semibold">{item.quantity}</span>

                <button
                    className="mx-1 focus:outline-none"
                    onClick={() => handleIncreaseItem(item)}
                >
                    <img src={plusIcon} alt="" width={30} />
                </button>
                {item.quantity > 1 && (
                    <button
                        className="mx-1 focus:outline-none"
                        onClick={() => handleDecreaseItem(item)}
                    >
                        <img src={minusIcon} alt="" width={30} />
                    </button>
                )}
                {item.quantity === 1 && (
                    <div onClick={() => handleClickRemoveItem(item)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#FF0000"
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
                )}
            </div>
        </div>
    );
};

export default CartItem;
