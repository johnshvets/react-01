import React from "react";
import styles from "./FormControls.module.css";

const FormControl = ({ input, meta, children, ...props }) => {
  const isError = meta.touched && meta.error;

  return (
    <div className={`${styles.formControl} ${isError && styles.error}`}>
      {children}
      {isError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  return (
    <FormControl {...props}>
      <textarea {...props.input} {...props}></textarea>
    </FormControl>
  );
};

export const Input = (props) => {
  return (
    <FormControl {...props}>
      <input {...props.input} {...props}></input>
    </FormControl>
  );
};
