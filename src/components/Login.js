// src/components/Login.js
import React from "react";
import InputField from "./Inputfield";
import Button from "./Button";

export default function Login() {
  return (
    <div className="phone">
      <div className="system-bar" />
      <div className="app-bar">
        <div className="left">
          <div className="brand">PhoneTutor</div>
          <div className="subtitle">Login</div>
        </div>
      </div>

      <div className="content">
        <div className="card">
          <h3 className="h-title">Welcome back</h3>
          <p className="h-sub">Sign in to continue</p>
          <div className="form">
            <label className="label">Email</label>
            <InputField type="email" placeholder="Email address" />
            <label className="label">Password</label>
            <InputField type="password" placeholder="Password" />
            <Button text="Login" variant="primary" />
          </div>
          <div className="small" style={{ marginTop: 12 }}>
            <a href="/forgot-password">Forgot password?</a>
          </div>
        </div>
      </div>

      <div style={{ padding: 8 }}>
        <Button text="Create account" variant="ghost" />
      </div>
    </div>
  );
}
