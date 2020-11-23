import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Post = ({ post, removePost }) => {
    let { path } = useRouteMatch();

    return (
        <div className="shadow-xl rounded-xl">
            <div className="">
                <img src={post.img_url} alt="" className="rounded-t-xl rounded-r-rounded-t-xl" />
            </div>
            <div className="">
                <h3 className="text-secondary font-bold text-xl text-center py-4 hover:underline">
                    <Link to={`${path}/${post.id}`}>{post.title}</Link>
                </h3>
                <p>{post.desc}</p>
            </div>
        </div>
    );
};

export default Post;
