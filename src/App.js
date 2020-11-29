import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScollTop from "./components/ScollTop";
import "./styles/tailwind.output.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

import HomePage from "./containers/HomePage";
import NewsPage from "./containers/NewsPage";
import CategoryPage from "./containers/CategoryPage";
import DetailNews from "./components/DetailNews";

const App = () => {
    return (
        <Router>
            <ScollTop />

            <div>
                {/* Header */}
                <Header />

                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/news">
                        <NewsPage />
                    </Route>
                    <Route exact path="/news/:id">
                        <DetailNews />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/category">
                        <CategoryPage />
                    </Route>
                    <Route exact path="/category/:cateID">
                        <CategoryPage />
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
