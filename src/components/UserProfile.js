// src/components/UserProfile.jsx
import React from "react";
import MenuItem from "./MenuItem";
import Navbar from "./Navbar";

export default function UserProfile() {
  return (
    <div>
      <h2>You</h2>
      <p><strong>Name:</strong> Miron Carp</p>
      <MenuItem text="My Device" />
      <MenuItem text="Content Settings" />
      <MenuItem text="Other" />
      <Navbar />
    </div>
  );
}
