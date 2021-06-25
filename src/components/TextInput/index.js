import React from "react";

const TextInput = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <div>
      <input type="text" {...props} {...field} />
      {touched[field.name] && errors[field.name] && <p>{errors[field.name]}</p>}
    </div>
  );
};

export default TextInput;
