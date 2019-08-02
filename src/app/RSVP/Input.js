import React from 'react';
export default function Input({
  type,
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
      <input
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={errors && touched && 'input-error'}
        {...props}
      />
      {(errors && touched) &&
        <div className="form-item-error">{errors}</div>
      }
    </div>
  );
}