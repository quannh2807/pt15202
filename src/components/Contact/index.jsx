import React from "react";

const Contact = () => {
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-center">Contact to us</h2>

            <form method="" action="#" className="my-4 px-20">
                <div className="row uniform">
                    <div className="6u 12u$(xsmall)">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value=""
                            placeholder="Name"
                        />
                    </div>
                    <div className="6u$ 12u$(xsmall)">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value=""
                            placeholder="Email"
                        />
                    </div>

                    <div className="12u$">
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Enter your message"
                            rows="6"
                        ></textarea>
                    </div>

                    <div className="12u$">
                        <ul className="actions">
                            <li>
                                <input type="submit" value="Send Message" />
                            </li>
                            <li>
                                <input
                                    type="reset"
                                    value="Reset"
                                    className="alt"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
