import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";

const SellerDashboard = () => {
  const [dashboardData, setDashboardData] = useState({});
  console.log(dashboardData, "dashboardData");
  const getDashboardData = async () => {
    try {
      const response = await api.get(`/seller/get-dashboard-data`);
      if (response.data.success) {
        setDashboardData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDashboardData();
  }, []);
  return (
    <div>
      <h1>Seller Dashboard</h1>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", flexDirection: "row", gap: "10px", padding: "20px", borderRadius: "5px" }}>
        <p style={{ width: "23%", height: "50px", border: "1px solid black" }}>Total Orders: {dashboardData.totalOrders}</p>
        <p style={{ width: "23%", height: "50px", border: "1px solid black" }}>Total Delivered Orders: {dashboardData.totalDeliveredOrders}</p>
        <p style={{ width: "23%", height: "50px", border: "1px solid black" }}>Total Dispatched Orders: {dashboardData.totalDispatchedOrders}</p>
        <p style={{ width: "23%", height: "50px", border: "1px solid black" }}>Total Pending Orders: {dashboardData.totalPendingOrders}</p>
        <p style={{ width: "23%", height: "50px", border: "1px solid black" }}>Total Revenue: {dashboardData.totalProfit}</p>
        <p style={{ width: "23%", height: "50px", border: "1px solid black" }}>Total Products: {dashboardData.totalProducts}</p>
        <p style={{ width: "23%", height: "50px", border: "1px solid black" }}>Total Stock: {dashboardData.totalStock}</p>
        <p style={{ width: "23%", height: "50px", border: "1px solid black" }}>Total Stock: {dashboardData.totalStock}</p>
      </div>
    </div>
  );
}

export default SellerDashboard;