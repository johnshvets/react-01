import React from "react";
import Loader from "../../common/loader";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  return !props.profile ? (
    <Loader />
  ) : (
    <section>
      <div>
        <h1>Name</h1>
        <img src={props.profile.photos.large} />
        <ProfileStatus
          status={props.status}
          updateProfileStatus={props.updateProfileStatus}
        />
      </div>
    </section>
  );
};

export default ProfileInfo;
