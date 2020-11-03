import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({
  isOwner,
  profile,
  status,
  updateProfileStatus,
  savePhoto,
} = {}) => {
  return (
    <main>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateProfileStatus={updateProfileStatus}
        savePhoto={savePhoto}
      />

      <MyPostsContainer />
    </main>
  );
};

export default Profile;
