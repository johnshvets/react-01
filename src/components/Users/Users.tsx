import React from "react";
import { UsersType } from "../../types/types";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type PropsType = {
  totalUserCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  users: Array<UsersType>;
  followingInProgress: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

const Users: React.FC<PropsType> = ({
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
        totalItemCount={totalUserCount}
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
