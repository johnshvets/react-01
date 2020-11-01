import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../../utils/validators";
import { Input } from "../../common/FormControls/FormControls";

const LoginForm = ({ handleSubmit, error } = {}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Input}
          name="email"
          type="text"
          placeholder="Email"
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name="password"
          type="password"
          placeholder="Password"
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          component={Input}
          type={"checkbox"}
          name={"rememberMe"}
          id={"rememberMe"}
        />
        <label class="checkbox-label" for="rememberMe">
          Remember me
        </label>
      </div>
      {error && <p>{error}</p>}
      <button>Sign in</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

export default ReduxLoginForm;
