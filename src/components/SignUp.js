// src/components/SignUp.js
import React from "react";
import InputField from "./Inputfield";
import Button from "./Button";

export default function Signup() {
  return (
    <div className="phone">
      <div className="system-bar" />
      <div className="app-bar">
        <div className="left">
          <div className="brand">PhoneTutor</div>
          <div className="subtitle">Sign Up</div>
        </div>
      </div>

      <div className="content">
        <div className="card">
          <h3 className="h-title">Create account</h3>
          <p className="h-sub">Join PhoneTutor</p>

          <div className="form">
            <label className="label">Full name</label>
            <InputField type="text" placeholder="Name" />
            <label className="label">Date of birth</label>
            <InputField type="date" placeholder="Date of Birth" />
            <label className="label">Email</label>
            <InputField type="email" placeholder="Email" />
            <label className="label">Password</label>
            <InputField type="password" placeholder="Password" />
            <Button text="Submit" />
          </div>
        </div>
      </div>

      <div style={{ padding: 8 }}>
        <Button text="Back to login" variant="ghost" />
      </div>
    </div>
  );
}
