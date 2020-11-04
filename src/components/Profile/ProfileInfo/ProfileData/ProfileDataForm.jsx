import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../../common/FormControls/FormControls";

const ProfileDataForm = ({ profile, handleSubmit, error } = {}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Name:</label>
        <Field component={Input} type="text" name="fullName" id="fullName" />
      </div>
      <div>
        <label htmlFor="lookingForAJob">Looking for a job:</label>
        <Field
          component={Input}
          type="checkbox"
          name="lookingForAJob"
          id="lookingForAJob"
        />
      </div>
      <div>
        <label htmlFor="myProfessionSkills">My profession skills:</label>
        <Field
          component={Textarea}
          name="lookingForAJobDescription"
          rows="3"
          id="myProfessionSkills"
        />
      </div>
      <div>
        <label htmlFor="aboutMe">About me:</label>
        <Field component={Textarea} name="aboutMe" rows="3" id={"aboutMe"} />
      </div>
      <div>
        <p>Contacts:</p>
        {Object.keys(profile.contacts).map((key, index) => (
          <div key={key}>
            <b>{key}</b>
            <Field
              component={Input}
              name={`contacts.${key}`}
              placeholder={key}
            />
          </div>
        ))}
      </div>
      {error && <p>{error}</p>}

      <button>Save</button>
    </form>
  );
};

const ReduxProfileDataForm = reduxForm({ form: "profileData" })(
  ProfileDataForm
);

export default ReduxProfileDataForm;
