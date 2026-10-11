import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";
import toast from "react-hot-toast";

const ViewProductsForAdmin = () => {
  const [products, setProducts] = useState([]);

  const approveProduct = async (productId) => {
    try {
      const response = await api.post("/admin/approve-product", { productId });
      if (response.data.success) {
        toast.success(response.data.message);
        getAllProducts(); // Refresh the list of products after approval
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };
  const getAllProducts = async () => {
    try {
      const response = await api.get("/admin/get-all-products");
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <h1>All Products</h1>
      {/* Add your admin dashboard content here */}
      <div>
        {products?.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((product, index) => (
              <section
                key={product._id}
                style={{
                  padding: "10px",
                  border: "1px solid black",
                  margin: "10px",
                  cursor: "pointer",
                  width: "22%",
                }}
              >
                <img
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  src={product.image}
                  alt={product.name}
                />
                <p>Sr. No. : {index + 1}</p>
                <p>Name : {product.name}</p>
                <p>Price : {product.price}</p>
                <p>Description : {product.description}</p>
                <p>Category : {product.category}</p>
                <p>Stock : {product.stock}</p>
                <p>
                  Approval :{" "}
                  {product.approvedByAdmin ? "Approved" : "Not Approved"}
                </p>
                {(!product.approvedByAdmin ||
                  product.approvedByAdmin == false) && (
                  <button onClick={() => approveProduct(product._id)}>
                    Approve
                  </button>
                )}
                <br />
                <button>View Details</button>
              </section>
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewProductsForAdmin;
