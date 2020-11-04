import React from "react";
import Loader from "../../common/loader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPic from "../../../images/user.svg";
import ProfileData from "./ProfileData/ProfileData";
import ReduxProfileDataForm from "./ProfileData/ProfileDataForm";
import { useState } from "react";

const ProfileInfo = ({
  isOwner,
  profile,
  status,
  updateProfileStatus,
  savePhoto,
  saveProfileData,
} = {}) => {
  const [editMode, setEditMode] = useState(false);

  const onMainPicChange = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfileData(formData).then(() => setEditMode(false));
  };

  return !profile ? (
    <Loader />
  ) : (
    <section>
      <div>
        <h1>{profile.fullName}</h1>
        <img src={profile.photos.large || userPic} width="250" />
        {isOwner && <input type={"file"} onChange={onMainPicChange} />}
        <ProfileStatus
          status={status}
          updateProfileStatus={updateProfileStatus}
        />
      </div>
      {editMode ? (
        <ReduxProfileDataForm
          initialValues={profile}
          profile={profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          activateEditMode={() => setEditMode(true)}
        />
      )}
    </section>
  );
};

export default ProfileInfo;
