// src/components/AppSuggestions.jsx
import React from "react";
import AppCard from "./AppCard";
import Navbar from "./Navbar";

export default function AppSuggestions() {
  return (
    <div>
      <h2>App Suggestions</h2>
      <AppCard title="Google Search" description="Search the web easily" />
      <AppCard title="YouTube" description="Watch and learn with videos" />
      <Navbar />
    </div>
  );
}
