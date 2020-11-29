import "./styles/tailwind.output.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScollTop from "./components/ScollTop";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import DetailNews from "./components/ProductDetail";

import HomePage from "./containers/HomePage";
import StorePage from "./containers/StorePage";
import CartPage from "./containers/CartPage";

import { CartProvider } from "./contexts/Cart";

const App = () => {
    return (
        <CartProvider>
            <Router>
                <ScollTop />

                <div>
                    {/* Header */}
                    <Header />

                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route exact path="/store">
                            <StorePage />
                        </Route>
                        <Route exact path="/store/:id">
                            <DetailNews />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/cart">
                            <CartPage />
                        </Route>
                    </Switch>

                    {/* Footer */}
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;
