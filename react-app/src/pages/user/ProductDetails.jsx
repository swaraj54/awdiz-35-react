import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../../config/axiosConfig";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});
  const { category, productId } = useParams();

  const getProductDetails = async () => {
    try {
      const response = await api.get(`/user/product-details/${productId}`);
      if (response.data.success) {
        setProductData(response.data.product);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async () => {
    try {
      const response = await api.get(`/user/add-to-cart/${productId}`);
      if (response.data.success) {
        toast.success(response.data.message)
        navigate("/cart")
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productId) {
      getProductDetails();
    }
  }, [productId]);
  return (
    <div>
      {productData?.name ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "90vh",
          }}
        >
          <div
            style={{ width: "45%", border: "1px solid black", height: "100%" }}
          >
            <img
              style={{ width: "100%", height: "70%" }}
              src={productData.image}
            />
          </div>
          <div
            style={{ width: "45%", border: "1px solid black", height: "100%" }}
          >
            <h2>{productData.name}</h2>
            <h2>Category : {productData.category}</h2>
            <h2>Price : {productData.price}/-</h2>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      ) : (
        <>
          <h1>Product Not found.</h1>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
