import React from "react";

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <li>
      <a href={contactValue}>{contactTitle}</a>
    </li>
  );
};

export default Contact;
