import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../../utils/validators";
import { Input } from "../../common/FormControls/FormControls";

const LoginForm = ({ handleSubmit, error, captchaUrl } = {}) => {
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
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>

      {error && <p>{error}</p>}

      {captchaUrl && (
        <div>
          <img src={captchaUrl} alt="captcha" />
          <Field
            component={Input}
            name="captcha"
            type="text"
            validate={[requiredField]}
          />
        </div>
      )}

      <button>Sign in</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

export default ReduxLoginForm;
