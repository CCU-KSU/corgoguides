// src/components/MenuItem.jsx
import React from "react";

export default function MenuItem({ text }) {
  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      {text}
    </div>
  );
}
