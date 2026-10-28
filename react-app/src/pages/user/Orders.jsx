import { useEffect } from "react";
import api from "../../config/axiosConfig";

const Orders = () => {
  const getOrder = async () => {
    try {
      const response = await api.get(`/user/get-orders`);
      if (response.data.success) {
        console.log(response.data.orders, "orders");
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
      <h1>Order</h1>
    </div>
  );
};

export default Orders;
