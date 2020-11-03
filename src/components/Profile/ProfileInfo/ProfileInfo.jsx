import React from "react";
import Loader from "../../common/loader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPic from "../../../images/user.svg";

const ProfileInfo = ({
  isOwner,
  profile,
  status,
  updateProfileStatus,
  savePhoto,
} = {}) => {
  const onMainPicChange = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return !profile ? (
    <Loader />
  ) : (
    <section>
      <div>
        <h1>Name</h1>
        <img src={profile.photos.large || userPic} width="250" />
        {isOwner && <input type={"file"} onChange={onMainPicChange} />}
        <ProfileStatus
          status={status}
          updateProfileStatus={updateProfileStatus}
        />
      </div>
    </section>
  );
};

export default ProfileInfo;
