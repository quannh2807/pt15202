import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailNews = () => {
    let { id } = useParams();
    const API_URL = `http://localhost:3004/posts/${id}`;

    const [news, setNews] = useState({});

    useEffect(() => {
        function fetchData() {
            axios
                .get(API_URL)
                .then((res) => setNews(res.data))
                .catch((err) => console.log(err));
        }
        fetchData();
        window.scrollTo(0, 0);
    }, []);

    return (
        <section id="main" className="wrapper">
            <div className="inner">
                <header className="align-center">
                    <h1>{news.title}</h1>
                    <p>{news.desc}</p>
                </header>
                <div className="image fit">
                    <img src={news.img_url} alt="" />
                </div>
                <p>
                    Nunc lacinia ante nunc ac lobortis. Interdum adipiscing
                    gravida odio porttitor sem non mi integer non faucibus
                    ornare mi ut ante amet placerat aliquet. Volutpat eu sed
                    ante lacinia sapien lorem accumsan varius montes viverra
                    nibh in adipiscing blandit tempus accumsan.
                </p>
                <p>
                    {" "}
                    Aenean iaculis, neque sed pretium egestas, nunc lacus tempus
                    enim, nec tincidunt urna massa a libero. Aenean mattis
                    bibendum est, a pharetra elit. Morbi commodo lectus quis
                    blandit mattis. Cras pharetra quam quis tincidunt tempus.
                    Donec a sem magna. Nullam purus purus, fermentum id lorem
                    sit amet, porta elementum neque. Proin vulputate metus ac
                    faucibus luctus.
                </p>
                <p>
                    Ut congue purus sed elit consectetur tempus. Duis convallis,
                    quam quis pellentesque vestibulum, tellus arcu hendrerit
                    ante, sed dictum felis nisl vitae magna. Integer et sapien a
                    erat molestie tempor. Cras est odio, suscipit id porttitor
                    id, mollis et ligula. Curabitur molestie mi molestie
                    accumsan faucibus. Vestibulum ante ipsum primis in faucibus
                    orci luctus et ultrices posuere cubilia Curae; Integer porta
                    malesuada pellentesque. Morbi imperdiet dictum velit, eu
                    volutpat sem posuere non. Fusce ullamcorper gravida velit,
                    sed sollicitudin libero iaculis id. Ut eu neque non odio
                    fringilla faucibus nec quis neque. Quisque et nisi
                    fermentum, tincidunt libero a, condimentum ligula. Quisque
                    ultrices blandit lacinia. Nulla velit lorem, placerat nec
                    eros ut, fermentum pharetra dolor. Maecenas arcu ipsum,
                    mattis et suscipit sed, convallis nec lectus. Nulla
                    facilisi. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae;{" "}
                </p>
            </div>
        </section>
    );
};

export default DetailNews;
