export const requiredField = (value) =>
  value ? undefined : "Field is required!";

export const maxLength = (maxLength) => (value) =>
  value && value.length > maxLength
    ? `Max length is ${maxLength} symbols!`
    : undefined;
