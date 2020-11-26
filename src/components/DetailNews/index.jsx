import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailNews = () => {
    let { id } = useParams();
    const API_URL = `http://localhost:1337/posts/${id}`;
    const [news, setNews] = useState({});

    useEffect(() => {
        function fetchData() {
            axios
                .get(API_URL)
                .then((res) => setNews(res.data))
                .catch((err) => console.log(err));
        }
        fetchData();
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="container mx-auto my-10">
            <div className="flex flex-col justify-between items-center">
                <h1 className="mb-10 text-secondary font-bold text-3xl text-center">
                    {news.title}
                </h1>
                <div className="w-1/2">
                    <img src={news.img_url} alt="" className="w-full" />
                </div>

                <div className="flex items-center">
                    <p className="flex-1 py-6 px-4">{news.description}</p>
                </div>
            </div>
        </section>
    );
};

export default DetailNews;
