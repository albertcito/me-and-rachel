import React from 'react';

export default function TextArea({
  name,
  label,
  value,
  errors,
  touched,
  handleChange,
  handleBlur,
  className,
  ...props
}) {
  return (
    <div className="form-item">
      <span className="labelText">
        {label}
      </span>
      <textarea
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={errors && touched && 'input-error'}
        {...props}
      ></textarea>
      {errors && touched &&
        <div className="form-item-error">{errors}</div>
      }
    </div>
  );
}