import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";

type PropsType = {
  status: string;
  updateProfileStatus: (newStatus: string) => void;
};

const ProfileStatus: React.FC<PropsType> = ({
  status,
  updateProfileStatus,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newStatus, setStatus] = useState(status);

  useEffect(() => setStatus(status), [status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    updateProfileStatus(newStatus);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setStatus(value);
  };

  return (
    <div>
      {!editMode && (
        <p onDoubleClick={activateEditMode}>
          <b>Status:</b> {status || "------------"}
        </p>
      )}
      {editMode && (
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deActivateEditMode}
          type="text"
          value={newStatus}
        />
      )}
    </div>
  );
};

export default ProfileStatus;
