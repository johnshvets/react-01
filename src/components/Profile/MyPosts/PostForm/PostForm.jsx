import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, requiredField } from "../../../../utils/validators";
import { Textarea } from "../../../common/FormControls/FormControls";

const maxPostLength = maxLength(150);

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newPostText"
        placeholder="New post!"
        rows="5"
        validate={[requiredField, maxPostLength]}
      />
      <button>Add post</button>
    </form>
  );
};
const PostFormRedux = reduxForm({ form: "dialogMessageForm" })(PostForm);

export default PostFormRedux;
