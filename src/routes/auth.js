import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LoginPage from "screens/LoginPage";

const Auth = () => {
    const { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <Redirect exact from="/auth" to="/auth/login" />

                <Route exact path={`${path}/login`} component={LoginPage} />
            </Switch>
        </div>
    );
};

export default Auth;
