import React from "react";
import { useNavigate, useParams} from "react-router-dom";
// import { ordersData } from "../data/OrderData";
import OrderTable from "../components/OrderTable";
import FeatureCard from "../components/FeatureCard";
import { useAuth } from "../context/AuthContext"; // Import the AuthContext

// Features array as provided
const features = [
  { title: "Domestic Shipping", description: "Fast and reliable domestic services.", icon: "🚚", route: "/services/domestic" },
  { title: "Cargo & Transportation", description: "Seamless cargo services for your needs.", icon: "🚢", route: "/services/cargo" },
  { title: "Cross Border Service", description: "Efficient international logistics.", icon: "✈️", route: "/services/cross-border" },
  { title: "FTL", description: "Full Truck Load services for large shipments.", icon: "🚛", route: "/services/ftl" },
  { title: "Priority & Express Service", description: "Get your shipments delivered on priority.", icon: "⚡", route: "/services/priority-express" },
  { title: "Packers & Movers", description: "Safe and reliable relocation services.", icon: "📦", route: "/services/packers-movers" },
  { title: "Value Added Services", description: "Custom services tailored for your needs.", icon: "🔧", route: "/services/value-added" },
  { title: "eCommerce Logistics", description: "End-to-end eCommerce solutions.", icon: "🛒", route: "/services/ecommerce" },
  { title: "Warehousing & Distribution", description: "Secure storage and distribution.", icon: "🏢", route: "/services/warehousing-distribution" },
];

// Order lists for each service
// const serviceOrderLists = {
//   domestic: ["Book Shipment", "Track Shipment", "Customer Support"],
//   cargo: ["Schedule Pickup", "Estimate Cost", "Cargo Tracking"],
//   "cross-border": ["Custom Clearance", "International Rates", "Partner Support"],
//   ftl: ["Book FTL Service", "Track FTL Shipments", "Billing Support"],
//   "priority-express": ["Express Delivery", "Track Shipment", "Priority Support"],
//   "packers-movers": ["Request Quote", "Track Moving", "Relocation Assistance"],
//   "value-added": ["Custom Services", "On-Demand Solutions", "Special Requests"],
//   ecommerce: ["Fulfillment Services", "Returns Management", "Integration Support"],
//   "warehousing-distribution": ["Inventory Management", "Order Fulfillment", "Storage Solutions"]
// };

const Services = () => {
    const { isLoggedIn } = useAuth(); // Access login status
    const navigate = useNavigate();
    const { serviceName } = useParams(); // Get the service name from the route

    const handleFeatureClick = (route) => {
      if (isLoggedIn) {
        navigate(route); // Navigate to the selected service route
      } else {
        navigate("/login"); // Redirect to login page if not logged in
      }
    };
    // Get the order data for the current service
    // const orders = ordersData[serviceName] || [];
  
    return (
      <main className="services">
        <div className="feature-list">
          {features.map((feature, index) => (
            <div key={index} onClick={() => handleFeatureClick(feature.route)}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
  
        {/* Display the Order Table for the current service
        <div className="order-section">
          <h2>{serviceName?.replace("-", " ").toUpperCase()} Orders</h2>
          <OrderTable orders={orders} />
        </div> */}
      </main> 
    );
  
};

export default Services;
