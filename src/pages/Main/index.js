import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

const Main = ({ match }) => {
  console.log(`${match.path}`);
  return (
    <div
      style={{
        backgroundColor: "wheat",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Switch>
        <Route path={`${match.path}`} exact component={Home} />
      </Switch>
    </div>
  );
};

export default Main;
