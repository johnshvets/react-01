import React from "react";
import userPic from "../../images/user.svg";
import classes from "./Users.module.css";

const Users = (props) => {
  const pageCount = Math.ceil(props.totalUserCount / props.pageSize);

  const pages = [];

  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }

  return (
    <main>
      <div>
        {pages.map((page) => {
          return (
            <button
              className={props.currentPage === page && classes.selectedPage}
              onClick={() => props.onPageChange(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div>
            <img
              src={user.photos.small != null ? user.photos.small : userPic}
              width="64px"
            />
            {user.followed ? (
              <button
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id);
                }}
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
      ))}
    </main>
  );
};

export default Users;
