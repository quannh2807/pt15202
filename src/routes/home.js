import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { CartProvider } from "contexts/Cart";
import Header from "components/Header";
import HomePage from "screens/HomePage";
import StorePage from "screens/StorePage";
import ProductDetail from "components/ProductDetail";
import Contact from "screens/Contact";
import About from "screens/About";
import CartPage from "screens/CartPage";
import Footer from "components/Footer";

const Home = () => {
    let { path } = useRouteMatch();

    return (
        <CartProvider>
            <div>
                <Header />

                <Switch>
                    <Route exact path={`${path}`}>
                        <HomePage />
                    </Route>
                    <Route exact path={`${path}/store`}>
                        <StorePage />
                    </Route>
                    <Route exact path={`${path}/store/:id`}>
                        <ProductDetail />
                    </Route>
                    <Route exact path={`${path}/contact`}>
                        <Contact />
                    </Route>
                    <Route exact path={`${path}/about`}>
                        <About />
                    </Route>
                    <Route exact path={`${path}/cart`}>
                        <CartPage />
                    </Route>
                </Switch>

                <Footer />
            </div>
        </CartProvider>
    );
};

export default Home;
