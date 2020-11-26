import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => (
    <div className="flex flex-col justify-between shadow-xl rounded-xl">
        <div className="">
            <img
                src={post.img_url}
                alt=""
                className="rounded-t-xl rounded-r-rounded-t-xl w-full"
            />
        </div>

        <div className="flex-initial">
            <h3 className="p-4">
                <Link
                    to={`/category/${post.category.id}`}
                    className="text-sm text-gray-500 font-bold uppercase hover:underline mr-2"
                >
                    {post.category.title}
                </Link>

                <Link
                    to={`/news/${post.id}`}
                    replace
                    className="text-secondary font-bold text-xl text-center py-4 hover:underline"
                >
                    {post.title}
                </Link>
            </h3>
        </div>
    </div>
);

export default Post;
