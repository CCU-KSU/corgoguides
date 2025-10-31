// src/components/Header.js
import React from "react";

export default function Header() {
  return (
    <header className="app-bar" style={{ background: "var(--dark)" }}>
      <div className="left">
        <div className="brand">PhoneTutor</div>
      </div>
    </header>
  );
}
