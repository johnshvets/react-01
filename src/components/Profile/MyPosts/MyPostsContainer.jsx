import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: () => {
    dispatch(addPostCreator());
  },
  updateNewPostText: (text) => {
    const action = updateNewPostTextCreator(text);
    dispatch(action);
  },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
