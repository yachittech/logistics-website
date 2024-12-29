import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDashboard.css";

const servicesData = {
  domestic: ["Book Shipment", "Track Shipment", "Customer Support"],
  cargo: ["Schedule Pickup", "Estimate Cost", "Cargo Tracking"],
  "cross-border": ["Custom Clearance", "International Rates", "Partner Support"],
  ftl: ["Book FTL Service", "Track FTL Shipments", "Billing Support"],
  "packers-movers": ["Request Quote", "Track Moving", "Relocation Assistance"],
  eCommerce: ["Fulfillment Services", "Returns Management", "Integration Support"],
  "warehousing-distribution": [
    "Inventory Management",
    "Order Fulfillment",
    "Storage Solutions",
  ],
};

const ServiceDashboard = () => {
  const { serviceName } = useParams();
  const options = servicesData[serviceName] || [];

  return (
    <div className="service-dashboard">
      <h2>{serviceName.replace("-", " ").toUpperCase()}</h2>
      <ol>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>
    </div>
  );
};

export default ServiceDashboard;
