import React from "react";
import MyPosts from "./MyPosts";
import { addPost } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (newPostText) => {
    dispatch(addPost(newPostText));
  },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
