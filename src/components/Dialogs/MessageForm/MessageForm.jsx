import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, requiredField } from "../../../utils/validators";
import { Textarea } from "../../common/FormControls/FormControls";

const maxMessageLength = maxLength(100);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessageText"
        placeholder="Enter your message"
        rows="3"
        validate={[requiredField, maxMessageLength]}
      />
      <button>Send</button>
    </form>
  );
};

const MessageFormRedux = reduxForm({ form: "dialogMessageForm" })(MessageForm);

export default MessageFormRedux;
