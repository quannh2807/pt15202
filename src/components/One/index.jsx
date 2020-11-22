import React from "react";
import Pic1 from "../../assets/images/pic01.jpg";

const One = () => {
    return (
        <section id="one" className="wrapper">
            <div className="inner flex flex-3">
                <div className="flex-item left">
                    <div>
                        <h3>Magna ultricies</h3>
                        <p>
                            Morbi in sem quis dui plalorem ipsum
                            <br /> euismod in, pharetra sed ultricies.
                        </p>
                    </div>
                    <div>
                        <h3>Ipsum adipiscing lorem</h3>
                        <p>
                            Tristique yonve cursus jam nulla quam
                            <br /> loreipsu gravida adipiscing lorem
                        </p>
                    </div>
                </div>
                <div className="flex-item image fit round">
                    <img src={Pic1} alt="" />
                </div>
                <div className="flex-item right">
                    <div>
                        <h3>Tempus nullam</h3>
                        <p>
                            Sed adipiscing ornare risus. Morbi estes
                            <br /> blandit sit et amet, sagittis magna.
                        </p>
                    </div>
                    <div>
                        <h3>Suscipit nibh dolore</h3>
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
