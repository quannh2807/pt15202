import React from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

const Banner = () => {
    const { url } = useRouteMatch();
    return (
        <section className="bg-banner">
            <div className="mx-auto max-w-6xl text-center py-48">
                <h1 className="text-5xl text-secondary leading-4 font-bold pb-8">
                    Ipsum sed lorem
                </h1>
                <p className="text-lg text-gray-600 pb-8">
                    Morbi in sem quis dui placerat ornare. Pellentesque odio
                    nisi, euismod
                    <br />
                    sed arcu cras consecuat lorem ipsum dolor sit amet.
                </p>
                <Link
                    to={`${url}/store`}
                    className="btn-orange font-bold uppercase"
                >
                    Khám phá
                </Link>
            </div>
        </section>
    );
};

export default Banner;
