import React from "react";
import { Field, reduxForm } from "redux-form";

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name="newMessageText"
        placeholder="Enter your message"
        rows={"3"}
      />
      <button>Send</button>
    </form>
  );
};

const MessageFormRedux = reduxForm({ form: "dialogMessageForm" })(MessageForm);

export default MessageFormRedux;
