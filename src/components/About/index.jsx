import React from "react";
import pc_layout from "../../assets/images/pc_layout.png";

const About = () => {
    return (
        <div className="container mx-auto mt-10">
            <h2>About Us</h2>

            <div class="flex">
                <div class="flex-1 pr-4">
                    <figure>
                        <img src={pc_layout} alt="pc_layout" className="rounded-lg" />
                    </figure>
                </div>
                <div class="flex-1">
                    <div class="">
                        <h3>Who is Lighten</h3>
                        <p>
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing
                            Lorem Ipsum.
                        </p>
                        <p>
                            Simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
