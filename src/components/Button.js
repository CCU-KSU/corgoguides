// src/components/Button.js
import React from "react";

export default function Button({ text = "Button", onClick, variant = "primary", className = "" }) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`;
  return (
    <button className={cls} onClick={onClick}>
      {text}
    </button>
  );
}
