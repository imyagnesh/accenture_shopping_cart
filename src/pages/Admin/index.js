import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import AdminPage from "./AdminPage";
import axiosInstance from "../../utils/axios";

class Admin extends PureComponent {
  async componentDidMount() {
    try {
      const user = await axiosInstance.get("/api/user/me");
      if (!user.isAdmin) {
        return this.props.history.replace("/home");
      }
    } catch (error) {
      return this.props.history.replace("/auth");
    }
  }

  render() {
    const { match } = this.props;
    return (
      <div
        style={{
          backgroundColor: "seagreen",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Switch>
          <Route path={`${match.path}`} exact component={AdminPage} />
        </Switch>
      </div>
    );
  }
}

export default Admin;
