import React, { useState, useRef, useEffect } from "react";
import { FaPencilAlt, FaEdit, FaTimes } from "react-icons/fa";
import "./DomesticOrderTable.css";

const ProgressBar = ({ progress }) => (
  <div className="progress-container">
    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
  </div>
);

const DomesticOrdersTable = ({ orders }) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [trackingVisible, setTrackingVisible] = useState(null); // Track which row's tracking is visible
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleDropdownToggle = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const handleOptionClick = (action) => {
    console.log(`Selected action: ${action}`);
    setDropdownVisible(null); // Close dropdown after selection
  };

  const handleTrackingToggle = (index) => {
    setTrackingVisible(trackingVisible === index ? null : index);
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Domestic Orders</h2>
        <div className="table-buttons">
          <button className="create-order-btn">+ Create New Order</button>
          <button className="export-btn">Export</button>
        </div>
      </div>

      <table className="order-table">
        <thead>
          <tr>
            <th>AWB No</th>
            <th>Manifested Date</th>
            <th>Consignee</th>
            <th>Type</th>
            <th>Box</th>
            <th>Order Status</th>
            <th>Expected Date of Delivery</th>
            <th>Action</th>
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
                <button
                  className="track-btn"
                  onClick={() => handleTrackingToggle(index)}
                >
                  {order.orderStatus}
                </button>
                {trackingVisible === index && (
                  <div className="tracking-details">
                    <h4>Tracking Progress</h4>
                    <ProgressBar progress={order.progress} />
                  </div>
                )}
              </td>
              <td>{order.expectedDateOfDelivery}</td>
              <td>
                <div className="action-dropdown-container" ref={dropdownRef}>
                  <button
                    className="action-btn"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    <FaPencilAlt
                      style={{
                        fontSize: "18px",
                        color: "var(--secondary-color)",
                      }}
                    />
                  </button>
                  {dropdownVisible === index && (
                    <div className="dropdown-menu">
                      <div
                        className="dropdown-item"
                        onClick={() => handleOptionClick("Modify")}
                      >
                        <FaEdit />
                      </div>
                      <div
                        className="dropdown-item"
                        onClick={() => handleOptionClick("Cancel")}
                      >
                        <FaTimes style={{ fontSize: "18px", color: "red" }}/>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DomesticOrdersTable;
