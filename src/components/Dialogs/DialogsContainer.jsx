import React from "react";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/WithAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => ({
  dialogPage: state.dialogPage,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (newMessageText) => {
    dispatch(sendMessageCreator(newMessageText));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
