import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";
import { toast } from "react-hot-toast";

const ViewOrdersAndProfit = () => {
    const [profit, setProfit] = useState(0);
    const [orders, setOrders] = useState([]);
    const [deliveryProfit, setDeliveryProfit] = useState(0);
    console.log(orders, "orders")
    const getOrder = async () => {
        try {
            const response = await api.get(`/admin/get-all-order-details`);
            if (response.data.success) {
                setOrders(response.data.orders);
                setProfit(response.data.adminProfit);
                setDeliveryProfit(response.data.deliveryProfit);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handlePaymentStatusChange = async (orderId, newStatus) => {
        try {
            const response = await api.put(`/seller/change-payment-status`, { orderId, newStatus });
            if (response.data.success) {
                setOrders(response.data.orders);
                toast.success("Payment status updated successfully");
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleDeliveryStatusChange = async (orderId, newStatus) => {
        try {
            const response = await api.put(`/seller/change-delivery-status`, { orderId, newStatus });
            if (response.data.success) {
                setOrders(response.data.orders);
                toast.success("Delivery status updated successfully");
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getOrder();
    }, []);
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "74%", border: "2px solid red" }}>
                <h1>Orders</h1>
                {orders.length > 0 ? (
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", border: "2px solid black", padding: "20px", borderRadius: "5px" }}>
                        {orders.map((order, i) => (
                            <div style={{ width: "30%", display: "flex", flexDirection: "column", gap: "10px", border: "2px solid black", padding: "10px", borderRadius: "5px" }} key={order._id}>
                                <div style={{ padding: "10px", borderRadius: "5px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <h3>Selling Price : {order.price}/-</h3>

                                    <h3>Service Cost : {order.serviceCost}/-</h3>
                                    <h3>Delivery Cost : {order.deliveryCost}/-</h3>
                                </div>

                                <h3>Address Details : {order.address.street}, {order.address.city}, {order.address.pincode} {order.address.zip}</h3>
                                <div style={{ padding: "10px", borderRadius: "5px", display: "flex", flexDirection: "row", gap: "10px" }}>
                                    <h3>Product:</h3>
                                    <p>{order.product.name}</p>
                                </div>
                                <div style={{ padding: "10px", borderRadius: "5px", display: "flex", flexDirection: "row", gap: "10px" }}>
                                    <h3>User:</h3>
                                    <p>{order.user.name}</p>
                                </div>
                                <div style={{ padding: "10px", borderRadius: "5px", display: "flex", flexDirection: "row", gap: "10px" }}>
                                    <h3> Current Payment Status: {order.payment_status}</h3><br />
                                </div>

                                <div style={{ padding: "10px", borderRadius: "5px", display: "flex", flexDirection: "row", gap: "10px" }}>
                                    <h3>Delivery Status: {order.delivery_status}</h3>

                                </div>

                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
            <div style={{ width: "24%", border: "2px solid red" }}>
                <h1>Total Profit - {profit}</h1>
                <h1>Delivery Profit - {deliveryProfit}</h1>
            </div>
        </div >
    );
};



export default ViewOrdersAndProfit;