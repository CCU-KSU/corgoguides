// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import Login from "./components/Login";
import HomeFeed from "./components/HomeFeed";
import UserProfile from "./components/UserProfile";
import Checklist from "./components/CheckList";
import Signup from "./components/SignUp";
import Content from "./components/Content";
import AppSuggestions from "./components/HomeApps";
import Inputfield from "./components/Inputfield";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomeFeed />} />
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<AppSuggestions />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </Router>
  );
}

export default App;
