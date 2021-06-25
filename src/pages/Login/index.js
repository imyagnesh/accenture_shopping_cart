import React, { PureComponent } from "react";
import Form from "../../components/Form";
import { initialValues, fields, loginSchema } from "./fields";
import axios from "../../utils/axios";

export class Login extends PureComponent {
  submit = async (values, actions) => {
    try {
      console.log(actions);
      const { token } = await axios.post("api/auth", values);
      sessionStorage.setItem("token", token);
      actions.resetForm();
      this.props.history.push("/home");
    } catch (error) {
      console.log(error.message);
      actions.setErrors({ serverError: error.message });
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Form
          fields={fields}
          enableReinitialize={true}
          initialValues={initialValues}
          btnName="Login"
          validationSchema={loginSchema}
          onSubmit={this.submit}
        />
      </div>
    );
  }
}

export default Login;
