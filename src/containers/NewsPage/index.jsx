import React from "react";
import Post from "../../components/Post";

const NewsPage = ({ data, removePost }) => (
    <section className="container wrapper ">
        <h2>List news</h2>

        <div className="grid grid-cols-3 gap-4">
            {data.map((post, index) => (
                <Post post={post} removePost={removePost} key={index} />
            ))}
        </div>
    </section>
);

export default NewsPage;
