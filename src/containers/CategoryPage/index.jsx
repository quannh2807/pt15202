import React, { useState, useEffect } from "react";
import Post from "../../components/Post";

const CategoryPage = () => {
    const API_URL = "http://localhost:1337/categories";

    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        function fetchData() {
            fetch(API_URL)
                .then((res) => res.json())
                .then((data) => setListCategory(data))
                .catch((error) => console.log(error));
        }

        fetchData();
    }, []);

    return (
        <section className="container mx-auto mt-6 mb-20">
            {listCategory.map((category) => (
                <div className="py-10">
                    <h2 className="text-secondary font-bold text-3xl pb-6">
                        {category.title}
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                        {category.posts.map((post) => (
                            <Post post={post} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default CategoryPage;
