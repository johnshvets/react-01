import React from "react";
import { Field, reduxForm } from "redux-form";

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={"textarea"} name={"newPostText"} rows={"5"} />
      <button>Add post</button>
    </form>
  );
};
const PostFormRedux = reduxForm({ form: "dialogMessageForm" })(PostForm);

export default PostFormRedux;
