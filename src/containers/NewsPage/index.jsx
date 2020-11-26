import React, { useState, useEffect } from "react";
import Post from "../../components/Post";

const NewsPage = () => {
    const [listPost, setListPost] = useState([]);
    const API_URL = "http://localhost:1337/posts";

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
            <h2 className="text-secondary font-bold text-3xl pb-6">Danh mục</h2>

            <div className="grid grid-cols-3 gap-6">
                {listPost.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </div>
        </section>
    );
};

export default NewsPage;
