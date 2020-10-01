import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../../utils/validators";
import { Input } from "../../common/FormControls/FormControls";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name="login"
          type="text"
          placeholder="Login"
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name="password"
          type="text"
          placeholder="Password"
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          component={Input}
          type={"checkbox"}
          name={"remember"}
          id={"remember"}
          validate={[requiredField]}
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
