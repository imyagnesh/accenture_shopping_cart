import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(renderProps) => {
        const token = sessionStorage.getItem("token");
        if (token) {
          if (
            renderProps.location.pathname === "/" ||
            renderProps.location.pathname === "/register"
          ) {
            return <Redirect to="/home" />;
          }
          return <Component {...renderProps} />;
        } else {
          if (renderProps.location.pathname !== "/") {
            return <Redirect to="/" />;
          }
          return <Component {...renderProps} />;
        }
      }}
    />
  );
};

export default AuthRoute;
