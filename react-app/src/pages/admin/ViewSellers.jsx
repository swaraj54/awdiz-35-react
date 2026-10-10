import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";
import toast from "react-hot-toast";

const ViewSellers = () => {
  const [sellers, setSellers] = useState([]);

  const approveSeller = async (sellerId) => {
    try {
      const response = await api.post("/admin/approve-seller", { sellerId });
      if (response.data.success) {
        toast.success(response.data.message);
        getAllSellers(); // Refresh the list of sellers after approval
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };
  const getAllSellers = async () => {
    try {
      const response = await api.get("/admin/get-all-sellers");
      if (response.data.success) {
        setSellers(response.data.sellers);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getAllSellers();
  }, []);
  return (
    <div>
      <h1>All Sellers</h1>
      {/* Add your admin dashboard content here */}
      <div>
        {sellers?.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {sellers.map((seller, index) => (
              <section
                key={seller._id}
                style={{
                  padding: "30px",
                  border: "1px solid black",
                  margin: "10px",
                  cursor: "pointer",
                  width: "23%",
                }}
              >
                <h2>Sr. No. : {index + 1}</h2>
                <h2>Name : {seller.name}</h2>
                <h2>Email : {seller.email}</h2>
                <h2>
                  Approval :{" "}
                  {seller.isApprovedByAdmin ? "Approved" : "Not Approved"}
                </h2>
                {seller.isApprovedByAdmin == false && (
                  <button onClick={() => approveSeller(seller._id)}>
                    Approve
                  </button>
                )}
                <br />
                <button>View Details</button>
              </section>
            ))}
          </div>
        ) : (
          <p>No sellers found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewSellers;
