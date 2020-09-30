import React from "react";
import ReduxLoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
  const onSubmit = (formData) => {};
  return (
    <section>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </section>
  );
};

export default Login;
