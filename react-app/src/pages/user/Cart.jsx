import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../../config/axiosConfig";
import ProductCard from "../../components/ProductCard";

const Cart = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  console.log(productData, "productData");
  const getUserCartProducts = async () => {
    try {
      const response = await api.get(`/user/get-cart-products`);
      if (response.data.success) {
        setProductData(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserCartProducts();
  }, []);
  return (
    <div>
      <h1>Cart</h1>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          border: "2px solid black",
          padding: "20px",
        }}
      >
        {productData.map((product) => (
          <ProductCard
            category={product.category}
            id={product._id}
            image={product.image}
            title={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
