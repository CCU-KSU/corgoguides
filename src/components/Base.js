// src/components/Base.jsx
import React from "react";

export default function Base({ children }) {
  return (
    <div style={{ margin: "20px", padding: "10px" }}>
      {children}
    </div>
  );
}
