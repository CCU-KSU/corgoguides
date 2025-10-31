// src/components/HomeFeed.js
import React from "react";
import FeedItem from "./FeedItem";
import Navbar from "./Navbar";

export default function HomeFeed() {
  return (
    <div className="phone">
      <div className="system-bar" />
      <div className="app-bar">
        <div className="left">
          <div className="brand">PhoneTutor</div>
          <div className="subtitle">Home</div>
        </div>
        <div className="actions">🔍</div>
      </div>

      <div className="content">
        <div className="card">
          <h3 className="h-title">Home</h3>
          <p className="h-sub">Feed & App suggestions</p>

          <div className="col">
            <FeedItem title="Split Screen Tutorial" description="Step by step guide to enable split screen." />
            <FeedItem title="Google Search Tips" description="Quick tips to use Google more effectively." />
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
