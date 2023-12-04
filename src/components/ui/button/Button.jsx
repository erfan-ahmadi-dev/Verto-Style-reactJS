import React from "react";

function Button({ onClick, label, disabled, styleClass = "primaryButton" }) {
  return (
    <button onClick={onClick} disabled={disabled} className={styleClass}>
      {label}
    </button>
  );
}

export default Button;
