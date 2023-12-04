import React from "react";

function Input({
  onClick,
  label,
  onBlur,
  onChange,
  lableVisibilty = "hidden",
  type,
  className,
  disabled,
  placeholder,
  width = "w-full",
  value,
  name,
  id,
}) {
  return (
    <div className={`${width} flex flex-col gap-1 `}>
      <label className={`${lableVisibilty} text-xs `}>{label}</label>
      <input
        type={`${type}`}
        className={className}
        disabled={disabled}
        onClick={onClick}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
      />
      <span></span>
    </div>
  );
}

export default Input;
