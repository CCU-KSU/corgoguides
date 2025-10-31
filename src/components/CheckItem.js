// src/components/CheckItem.js
import React from "react";

export default function CheckItem({ text }) {
  return (
    <div className="check-item">
      <input type="checkbox" />
      <div>
        <div style={{ fontWeight: 700 }}>{text}</div>
        <div className="small">Tap to mark complete</div>
      </div>
    </div>
  );
}
