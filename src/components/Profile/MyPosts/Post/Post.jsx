import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <p>{props.message}</p>
      <button>like</button>
    </div>
  );
};

export default Post;
