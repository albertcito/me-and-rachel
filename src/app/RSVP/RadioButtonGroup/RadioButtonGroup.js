import React from 'react';
import classNames from "classnames";
// Radio group
export default function  RadioButtonGroup({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) {
  const classes = classNames(
    "input-field",
    {
      "is-success": value || (!error && touched), // handle prefilled or user-filled
      "is-error": !!error && touched
    },
    className
  );

  return (
    <div className={classes}>
        <span className="labelText">
          {label}
        </span>
        {children}
        {<InputFeedback error={error} />}
    </div>
  );
}

// Input feedback
const InputFeedback = ({ error }) =>
  error ? <div className="form-item-error">{error}</div> : null;