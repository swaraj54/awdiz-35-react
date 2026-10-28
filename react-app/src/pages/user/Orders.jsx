import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders, "orders")
  const getOrder = async () => {
    try {
      const response = await api.get(`/user/get-orders`);
      if (response.data.success) {
        setOrders(response.data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div>
      <h1>Orders</h1>
      {orders.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", border: "2px solid black", padding: "20px", borderRadius: "5px" }}>
          {orders.map((order, i) => (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", border: "1px solid black", padding: "10px", borderRadius: "5px" }} key={order._id}>
              <div style={{ border: "1px solid black", padding: "10px", borderRadius: "5px", display: "flex", flexDirection: "row", gap: "10px" }}>
                <h3>Delivery Status: {order.delivery_status}</h3>
                <h3>Payment Status: {order.payment_status}</h3>
                <h3>Address Details : {order.address.street}, {order.address.city}, {order.address.pincode} {order.address.zip}</h3>
              </div>
              <div style={{ border: "1px solid red", padding: "10px", borderRadius: "5px", display: "flex", flexDirection: "row", gap: "10px" }}>
                {order.products.map((product) => (
                  <div>
                    <img style={{ width: "100px", height: "100px" }} src={product.productId?.image} alt={product.productId?.name} />
                    <h4>Product Name: {product.productId?.name}</h4>
                    <h4>Product Price: ${product.price.toFixed(2)}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Orders;
