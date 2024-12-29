// OrderTable.js
import React from "react";

const OrderTable = ({ orders }) => {
  return (
    <table className="order-table">
      <thead>
        <tr>
          <th>AWB No</th>
          <th>Manifested Date</th>
          <th>Consignee</th>
          <th>Type</th>
          <th>Box</th>
          <th>Action</th>
          <th>Order Status</th>
          <th>Expected Date of Delivery</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td>{order.awbNo}</td>
            <td>{order.manifestedDate}</td>
            <td>{order.consignee}</td>
            <td>{order.type}</td>
            <td>{order.box}</td>
            <td>
              <button>{order.action}</button>
            </td>
            <td>{order.orderStatus}</td>
            <td>{order.expectedDateOfDelivery}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
