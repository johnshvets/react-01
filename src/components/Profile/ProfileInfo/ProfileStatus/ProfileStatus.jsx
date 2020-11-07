import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => setStatus(props.status), [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateProfileStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {!editMode && (
        <p onDoubleClick={activateEditMode}>
          <b>Status:</b> {props.status || "------------"}
        </p>
      )}
      {editMode && (
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deActivateEditMode}
          type="text"
          value={status}
        />
      )}
    </div>
  );
};

export default ProfileStatus;
