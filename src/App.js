import React, { PureComponent } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import customHistory from "./customHistory";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import NoMatch from "./pages/NoMatch";
import axiosInstance from "./utils/axios";

// 1. non authenticated routes
//
// 2. authenticated route

class App extends PureComponent {
  //   state = {
  //     isAuthenticated: false,
  //   };

  //   componentDidMount() {
  //     const token = sessionStorage.getItem("token");
  //     this.setState({
  //       isAuthenticated: !!token,
  //     });
  //   }

  render() {
    return (
      <Router history={customHistory}>
        <Switch>
          <Route
            path="/auth"
            render={(renderProps) => {
              const token = sessionStorage.getItem("token");
              if (token) {
                return <Redirect to="/home" />;
              }
              return <Auth {...renderProps} />;
            }}
          />
          <Route
            path="/home"
            render={(renderProps) => {
              const token = sessionStorage.getItem("token");
              if (!token) {
                return <Redirect to="/auth" />;
              }
              return <Main {...renderProps} />;
            }}
          />
          <Route path="/admin" component={Admin} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
