import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NoMatch from "../NoMatch";

const Auth = ({ match }) => {
  console.log("====================================");
  console.log(`${match.path}register`);
  console.log("====================================");
  return (
    <div
      style={{ backgroundColor: "gray", minHeight: "100vh", minWidth: "100vw" }}
    >
      <Switch>
        <Route path={`${match.path}`} exact component={Login} />
        <Route path={`${match.path}/register`} component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export default Auth;
