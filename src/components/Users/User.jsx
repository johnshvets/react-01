import React from "react";
import { NavLink } from "react-router-dom";
import userPic from "../../images/user.svg";

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <div>
        <NavLink to={`/profile/${user.id}`}>
          <img
            src={user.photos.small !== null ? user.photos.small : userPic}
            width="64px"
          />
        </NavLink>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => unfollow(user.id)}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => follow(user.id)}
          >
            Follow
          </button>
        )}
      </div>
      <div>
        <h2>{user.name}</h2>
        <p>{user.status}</p>
      </div>
    </div>
  );
};

export default User;
