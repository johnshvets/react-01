import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import ReduxLoginForm from "./LoginForm/LoginForm";

const Login = ({ login, isAuth, captchaUrl } = {}) => {
  const onSubmit = ({ email, password, rememberMe, captcha } = {}) => {
    login(email, password, rememberMe, captcha);
  };
  return isAuth ? (
    <Redirect to={"/profile"} />
  ) : (
    <section>
      <h1>Login</h1>{" "}
      <ReduxLoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
