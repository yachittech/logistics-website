// Services/Domestic.js (or modify the existing `Services.js` with a specific route)
import React from "react";
import { domesticOrders } from "../../../data/DomesticOrderData";
import DomesticOrdersTable from "../../../components/OrderTable/DomesticOrdertable";

const Domestic = () => {
  return (
    <div className="domestic-service">
      <h2>Domestic Shipping Orders</h2>

      {/* Display the Domestic Orders Table */}
      <DomesticOrdersTable orders={domesticOrders} />
    </div>
  );
};

export default Domestic;
