import React from "react";
import Contact from "./Contact";

const ProfileData = ({ profile, isOwner, activateEditMode } = {}) => {
  return (
    <div>
      {isOwner && <button onClick={activateEditMode}>Edit</button>}
      <p>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </p>
      <p>
        <b>My profession skills:</b> {profile.lookingForAJobDescription}
      </p>
      <p>
        <b>About me:</b> {profile.aboutMe}
      </p>
      <div>
        <p>Contacts:</p>
        <ul>
          {Object.keys(profile.contacts).map((key) => (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileData;
