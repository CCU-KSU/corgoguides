// src/components/AppCard.jsx
import React from "react";

export default function AppCard({ title, description }) {
  return (
    <div style={{ border: "1px solid black", margin: "5px", padding: "10px" }}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
