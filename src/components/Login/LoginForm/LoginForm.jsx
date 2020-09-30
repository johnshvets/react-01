import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"input"}
          name={"login"}
          type="text"
          placeholder={"Login"}
        />
      </div>
      <div>
        <Field
          component={"input"}
          name={"password"}
          input
          type="text"
          placeholder={"Password"}
        />
      </div>
      <div>
        <Field
          component={"input"}
          type={"checkbox"}
          name={"remember"}
          id={"remember"}
        />
        <label class="checkbox-label" for="remember">
          Remember me
        </label>
      </div>
      <button>Sign in</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

export default ReduxLoginForm;
