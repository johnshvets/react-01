import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
  totalUserCount,
  pageSize,
  currentPage,
  onPageChange,
  users,
  followingInProgress,
  unfollow,
  follow,
}) => {
  return (
    <main>
      <Paginator
        totalUserCount={totalUserCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
    </main>
  );
};

export default Users;
