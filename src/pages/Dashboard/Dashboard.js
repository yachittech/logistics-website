import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const dashboardData = [
  {
    category: "Domestic Shipping",
    route: "/services/domestic",
    options: ["Book Shipment", "Track Shipment", "Customer Support"],
  },
  {
    category: "Cargo & Transportation",
    route: "/services/cargo",
    options: ["Schedule Pickup", "Estimate Cost", "Cargo Tracking"],
  },
  {
    category: "Cross Border Service",
    route: "/services/cross-border",
    options: ["Custom Clearance", "International Rates", "Partner Support"],
  },
  {
    category: "FTL",
    route: "/services/ftl",
    options: ["Book FTL Service", "Track FTL Shipments", "Billing Support"],
  },
  {
    category: "Packers & Movers",
    route: "/services/packers-movers",
    options: ["Request Quote", "Track Moving", "Relocation Assistance"],
  },
  {
    category: "eCommerce Logistics",
    route: "/services/eCommerce",
    options: ["Fulfillment Services", "Returns Management", "Integration Support"],
  },
  {
    category: "Warehousing & Distribution",
    route: "/services/warehousing-distribution",
    options: ["Inventory Management", "Order Fulfillment", "Storage Solutions"],
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-categories">
        {dashboardData.map((category, index) => (
          <div className="dashboard-category" key={index}>
            <h3>
              <Link to={category.route}>{category.category}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
