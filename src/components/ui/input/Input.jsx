import React from "react";

function Input({
  onClick,
  label,
  onBlur,
  onChange,
  lableVisibilty = "hidden",
  type,
  styleClass,
  disabled,
  placeHolder,
  width = "w-full",
}) {
  return (
    <div className={`${width} `}>
      <label className={`${lableVisibilty}`}>{label}</label>
      <input
        type={`${type}`}
        className={styleClass}
        disabled={disabled}
        onClick={onClick}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeHolder}
      />
      <span></span>
    </div>
  );
}

export default Input;
