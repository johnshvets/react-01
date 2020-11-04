import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import ReduxLoginForm from "./LoginForm/LoginForm";

const Login = ({ login, isAuth } = {}) => {
  const onSubmit = ({ email, password, rememberMe } = {}) => {
    login(email, password, rememberMe);
  };
  return isAuth ? (
    <Redirect to={"/profile"} />
  ) : (
    <section>
      <h1>Login</h1> <ReduxLoginForm onSubmit={onSubmit} />
    </section>
  );
};

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export default connect(mapStateToProps, { login })(Login);
