import React from "react";
import "./Home.css";

const features = [
  {
    title: "Zero RTO Rates",
    description: "Optimized routing, precise customer communication, and reliable delivery partners.",
  },
  {
    title: "Comprehensive Platform",
    description: "Booking small shipments, relocation services, vehicle transport, and international imports/exports.",
  },
  {
    title: "Express & Priority Services",
    description: "Ensuring deliveries within 1–2 days.",
  },
  {
    title: "Flexible Shipping",
    description: "Ship liquid, medicinal, hazardous, and battery-based consignments adhering to safety norms.",
  },
  {
    title: "Global Reach",
    description: "29,000+ PIN codes across India and a global reach spanning 216 countries.",
  },
];

const Home = () => (
  <main className="home">
    <h2>Why Choose Us?</h2>
    <div className="features-grid">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </main>
);

export default Home;
