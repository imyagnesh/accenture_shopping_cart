import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

const Main = ({ match, history }) => {
  console.log(`${match.path}`);
  return (
    <div
      style={{
        backgroundColor: "wheat",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <button
        type="button"
        onClick={() => {
          sessionStorage.clear();
          history.replace("/auth");
        }}
      >
        Logout
      </button>
      <Switch>
        <Route path={`${match.path}`} exact component={Home} />
      </Switch>
    </div>
  );
};

export default Main;
