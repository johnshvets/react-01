import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <section>
      <div>
        <img src="https://i.pinimg.com/originals/b9/12/c1/b912c1aa2759236fad22995a0648391c.jpg" />
      </div>

      <div>
        <h1>Name</h1>
        <img src="https://www.badeendwinkel.nl/3555-large_default/selfie-duck-lanco.jpg" />
      </div>
    </section>
  );
};

export default ProfileInfo;
