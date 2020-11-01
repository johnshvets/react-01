import React from "react";
import styles from "./FormControls.module.css";

const FormControl = ({
  input,
  meta: { touched, error },
  children,
  ...props
}) => {
  const isError = touched && error;

  return (
    <div className={`${styles.formControl} ${isError && styles.error}`}>
      {children}
      {isError && <span>{error}</span>}
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
