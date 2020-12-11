import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../redux/users-reducer";
import Users from "./Users";
import Loader from "../common/loader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getStateUsers,
  getTotalUserCount,
} from "../../redux/users-selector";
import { UsersType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
  isFetching: boolean;
  currentPage: number;
  pageSize: number;
  totalUserCount: number;
  users: Array<UsersType>;
  followingInProgress: Array<number>;
};

type MapDispatchPropsType = {
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { getUsers, currentPage, pageSize } = this.props;

    getUsers(currentPage, pageSize);
  }

  onPageChange = (pageNumber: number) => {
    const { getUsers, pageSize } = this.props;

    getUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  users: getStateUsers(state),
  pageSize: getPageSize(state),
  totalUserCount: getTotalUserCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
});

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      getUsers,
    }
  ),
  withAuthRedirect
)(UsersContainer);
