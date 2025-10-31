// src/components/FeedItem.js
import React from "react";

export default function FeedItem({ title, description }) {
  return (
    <div className="card feed-item">
      <div className="feed-avatar">{title?.[0] || "A"}</div>
      <div className="feed-body">
        <h4 className="feed-title">{title}</h4>
        <p className="feed-desc">{description}</p>
      </div>
    </div>
  );
}
