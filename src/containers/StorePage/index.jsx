import React, { useState, useEffect } from "react";
import Product from "../../components/Product";
import Asidebar from "../../components/Asidebar";

const StorePage = () => {
    const [listPost, setListPost] = useState([]);
    const API_URL = "http://localhost:1337/products";

    useEffect(() => {
        function fetchData() {
            fetch(API_URL)
                .then((res) => res.json())
                .then((data) => setListPost(data))
                .catch((error) => console.log(error));
        }

        fetchData();
    }, []);

    return (
        <section className="container mx-auto mt-6 mb-20">
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
        </section>
    );
};

export default StorePage;
