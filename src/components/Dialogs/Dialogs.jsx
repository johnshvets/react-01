import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import MessageFormRedux from "./MessageForm/MessageForm";

const Dialogs = (props) => {
  const dialogElement = props.dialogPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  const messageElement = props.dialogPage.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  const onSendMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };

  return (
    <main className={classes.dialogWrapper}>
      <section className={classes.dialogs}>{dialogElement}</section>

      <section className={classes.messages}>
        <div>{messageElement}</div>
        <MessageFormRedux onSubmit={onSendMessage} />
      </section>
    </main>
  );
};

export default Dialogs;
