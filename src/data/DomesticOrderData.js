// orderData.js
export const domesticOrders = [
  {
    awbNo: "AWB123456",
    manifestedDate: "2024-12-10",
    consignee: "John Doe",
    type: "Standard",
    box: "1",
    action: "Track",
    orderStatus: "In Transit",
    expectedDateOfDelivery: "2024-12-15",
  },
  {
    awbNo: "AWB654321",
    manifestedDate: "2024-12-11",
    consignee: "Jane Smith",
    type: "Express",
    box: "5",
    action: "Track",
    orderStatus: "Shipped",
    expectedDateOfDelivery: "2024-12-14",
  },
  {
    awbNo: "AWB789012",
    manifestedDate: "2024-12-12",
    consignee: "Michael Brown",
    type: "Standard",
    box: "13",
    action: "Track",
    orderStatus: "Delivered",
    expectedDateOfDelivery: "2024-12-13",
  },
  // Add more orders as needed
];
