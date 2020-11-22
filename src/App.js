import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/tailwind.output.css";
import "./assets/css/main.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

import HomePage from "./containers/HomePage";
import NewsPage from "./containers/NewsPage";
import DetailNews from "./components/DetailNews";

const App = () => {
    const [listPost, setListPost] = useState([]);
    const API_URL = "http://localhost:3004/posts";

    useEffect(() => {
        function fetchData() {
            fetch(API_URL)
                .then((res) => res.json())
                .then((data) => setListPost(data))
                .catch((error) => console.log(error));
        }

        fetchData();
    }, []);

    return (
        <Router>
            <div>
                {/* Header */}
                <Header />

                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/news">
                        <NewsPage
                            data={listPost}
                        />
                    </Route>
                    <Route exact path="/news/:id">
                        <DetailNews />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
};

export default App;
