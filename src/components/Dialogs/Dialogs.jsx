import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogElement = props.dialogPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  const messageElement = props.dialogPage.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    const text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <main className={classes.dialogWrapper}>
      <section className={classes.dialogs}>{dialogElement}</section>

      <section className={classes.messages}>
        <div>{messageElement}</div>
        <div>
          <textarea
            value={props.dialogPage.newMessageText}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          />
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </section>
    </main>
  );
};

export default Dialogs;
