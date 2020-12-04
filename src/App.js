import "./styles/tailwind.output.css";
import React from "react";
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";

import ScollTop from "components/ScollTop";
import Home from "routes/home";
import Auth from "routes/auth";

const App = () => {
    return (
        <div>
            <Router>
                <ScollTop />

                <Switch>
                    <Redirect exact from="/" to="/home" />

                    <Route path="/home" component={Home} />
                    <Route path="/auth" component={Auth} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
