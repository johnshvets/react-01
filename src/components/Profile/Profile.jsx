import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from "./Profile.module.css";

const Profile = ({
  isOwner,
  profile,
  status,
  updateProfileStatus,
  savePhoto,
  saveProfileData,
} = {}) => {
  return (
    <main className={classes.profileContainer}>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateProfileStatus={updateProfileStatus}
        savePhoto={savePhoto}
        saveProfileData={saveProfileData}
      />

      <MyPostsContainer />
    </main>
  );
};

export default Profile;
