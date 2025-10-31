// src/components/CheckList.js
import React from "react";
import CheckItem from "./CheckItem";
import Navbar from "./Navbar";

export default function Checklist() {
  return (
    <div className="phone">
      <div className="system-bar" />
      <div className="app-bar">
        <div className="left">
          <div className="brand">PhoneTutor</div>
          <div className="subtitle">Check List</div>
        </div>
      </div>

      <div className="content">
        <h3 className="h-title">Check List</h3>
        <p className="h-sub">Onboarding tasks to try</p>

        <div className="card check-list">
          <CheckItem text="Open Home Screen" />
          <CheckItem text="Set Wallpaper" />
          <CheckItem text="Try Split Screen" />
        </div>
      </div>

      <Navbar />
    </div>
  );
}
