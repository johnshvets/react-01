import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostFormRedux from "./PostForm/PostForm";

const MyPosts = (props) => {
  const postElement = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  const addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <section>
      <h2>My posts</h2>
      <PostFormRedux onSubmit={addNewPost} />
      {postElement}
    </section>
  );
};

export default MyPosts;
