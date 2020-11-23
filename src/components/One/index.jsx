import React from "react";
import Pic1 from "../../assets/images/pic01.jpg";

const One = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto flex justify-evenly">
                <div className="flex flex-col justify-around text-right">
                    <div>
                        <h3 className="font-bold text-2xl text-secondary ">Magna ultricies</h3>
                        <p>
                            Morbi in sem quis dui plalorem ipsum
                            <br /> euismod in, pharetra sed ultricies.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl text-secondary ">Ipsum adipiscing lorem</h3>
                        <p>
                            Tristique yonve cursus jam nulla quam
                            <br /> loreipsu gravida adipiscing lorem
                        </p>
                    </div>
                </div>
                <div className="">
                    <img src={Pic1} alt="" className="rounded-full" />
                </div>
                <div className="flex flex-col justify-around text-left">
                    <div>
                        <h3 className="font-bold text-2xl text-secondary">Tempus nullam</h3>
                        <p>
                            Sed adipiscing ornare risus. Morbi estes
                            <br /> blandit sit et amet, sagittis magna.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl text-secondary ">Suscipit nibh dolore</h3>
                        <p>
                            Pellentesque egestas sem. Suspendisse
                            <br /> modo ullamcorper feugiat lorem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default One;
