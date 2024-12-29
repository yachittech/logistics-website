import React from "react";

const FeatureCard = ({ title, description, icon }) => (
  <div className="feature-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default FeatureCard;
