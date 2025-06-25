// pages/MyOrders.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios.get(`http://localhost:5001/api/orders/${userId}`)
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, [userId]);

  return (
    <div className="container">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="order-box">
            <h4>{order.service_title}</h4>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Description:</strong> {order.description}</p>
            <p><strong>Ordered at:</strong> {new Date(order.order_date).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;
