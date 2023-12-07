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
  ischecked,
  flextype,
  gap,
}) {
  return (
    <div className={`${width} flex flex-${flextype} gap-${gap} `}>
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
        defaultChecked={ischecked}
      />
      <span></span>
    </div>
  );
}

export default Input;
