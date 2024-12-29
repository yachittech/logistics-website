import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./DashboardSidebar.css";

const dashboardData = {
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

const DashboardSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { serviceName } = useParams();
  const location = useLocation();

  // Determine if the sidebar should be visible
  const isServiceRoute = location.pathname.startsWith("/services/");
  const options = dashboardData[serviceName] || [];

  if (!isServiceRoute) return null; // Hide sidebar if not on a service route

  return (
    <div className={`dashboard-sidebar ${isSidebarOpen ? "open" : ""}`}>
      <button
        className="toggle-sidebar"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>
      {isSidebarOpen && (
        <div className="sidebar-content">
          <h3>{serviceName?.replace("-", " ").toUpperCase()}</h3>
          <ul>
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DashboardSidebar;
