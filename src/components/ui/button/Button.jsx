import React from "react";

function Button({
  onClick,
  label,
  disabled,
  styleClass = "primaryButton",
  type,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styleClass}
      type={type}
    >
      {label}
    </button>
  );
}

export default Button;
