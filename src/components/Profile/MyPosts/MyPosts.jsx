import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElement = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));
  let newPostElement = React.createRef();

  const addNewPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <section>
      <h2>My posts</h2>
      <div>
        <textarea
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange}
        />
        <button onClick={addNewPost}>Add post</button>
      </div>
      {postElement}
    </section>
  );
};

export default MyPosts;
