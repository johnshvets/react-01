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

class UsersContainer extends React.Component {
  componentDidMount() {
    const { getUsers, currentPage, pageSize } = this.props;

    getUsers(currentPage, pageSize);
  }

  onPageChange = (pageNumber) => {
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

const mapStateToProps = (state) => ({
  users: getStateUsers(state),
  pageSize: getPageSize(state),
  totalUserCount: getTotalUserCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
});

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
  }),
  withAuthRedirect
)(UsersContainer);
