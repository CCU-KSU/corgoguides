// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bottom-nav">
      <Link className="nav-icon active" to="/">
        <span>🏠</span>
        <span>Home</span>
      </Link>
      <Link className="nav-icon" to="/apps">
        <span>🔲</span>
        <span>Apps</span>
      </Link>
      <Link className="nav-icon" to="/feed">
        <span>📰</span>
        <span>Feed</span>
      </Link>
      <Link className="nav-icon" to="/profile">
        <span>👤</span>
        <span>Profile</span>
      </Link>
    </nav>
  );
}
