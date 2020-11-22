import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Post = ({ post, removePost }) => {
    let { path } = useRouteMatch();

    return (
        <div className="box shadow-xl flex-col-reverse pb-5">
            <div className="image fit">
                <img src={post.img_url} alt="" />
            </div>
            <div className="content">
                <h3>
                    <Link to={`${path}/${post.id}`}>{post.title}</Link>
                </h3>
                <p>{post.desc}</p>
            </div>
        </div>
    );
};

export default Post;
