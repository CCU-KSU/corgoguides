// src/components/Inputfield.js
import React from "react";

export default function InputField({ type = "text", placeholder = "", value, onChange, className = "" }) {
  return (
    <input
      className={`input ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
