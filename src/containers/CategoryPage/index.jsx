import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Post";

const CategoryPage = () => {
    const { cateID } = useParams();

    var API_URL = "http://localhost:1337/categories";

    if (cateID) {
        API_URL = `${API_URL}/${cateID}`;
    }
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
            {Array.isArray(listCategory) &&
                listCategory.map((category, index) => (
                    <div className="py-10" key={index}>
                        <h2 className="text-secondary font-bold text-3xl">
                            Danh mục: {category.title}
                        </h2>
                        <div className="grid grid-cols-3 gap-6 pt-6">
                            {category.posts.map((post, index) => (
                                <Post post={post} key={index} />
                            ))}
                        </div>
                    </div>
                ))}

            {!Array.isArray(listCategory) && (
                <div className="py-10">
                    <h2 className="text-secondary font-bold text-3xl">
                        Danh mục: {listCategory.title}
                    </h2>
                    <div className="grid grid-cols-3 gap-6 pt-6">
                        {listCategory.posts.map((post, index) => (
                            <Post post={post} key={index} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default CategoryPage;
