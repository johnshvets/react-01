import React from "react";
import Loader from "../../common/loader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({ profile, status, updateProfileStatus } = {}) => {
  return !profile ? (
    <Loader />
  ) : (
    <section>
      <div>
        <h1>Name</h1>
        <img src={profile.photos.large} />
        <ProfileStatus
          status={status}
          updateProfileStatus={updateProfileStatus}
        />
      </div>
    </section>
  );
};

export default ProfileInfo;
