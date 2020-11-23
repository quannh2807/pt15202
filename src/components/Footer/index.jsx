import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarker } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-secondary text-white text-center">
            <div className="container mx-auto py-20">
                <div>
                    <h2 className="text-2xl font-bold py-5">Get In Touch</h2>
                    <ul className="flex justify-between py-5 max-w-3xl mx-auto text-gray-400">
                        <li className="flex items-center">
                            <FaPhoneAlt className="text-primary" />
                            <a href="/#" >(000) 000-0000</a>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-primary" />
                            <a  href="/#">information@untitled.tld</a>
                        </li>
                        <li className="flex items-center">
                            <FaMapMarker className="text-primary"/> 123 Somewhere Road, Nashville, TN
                            00000
                        </li>
                    </ul>
                </div>

                <div className="py-5 text-gray-400 border-t border-opacity-30">
                    &copy; Untitled. Design{" "}
                    <a href="https://templated.co">TEMPLATED</a>. Images{" "}
                    <a href="https://unsplash.com">Unsplash</a>.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
