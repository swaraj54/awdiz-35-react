import { useEffect, useState } from "react";
import api from "../config/axiosConfig";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  console.log(bestSellingProducts, "bestSellingProducts");
  const getBestSellingProducts = async () => {
    try {
      const response = await api.get(`/user/get-dashboard-data`);
      if (response.data.success) {
        setBestSellingProducts(response.data.bestSellingProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBestSellingProducts();
  }, []);
  return (
    <div>
      <h1>Best Selling Products</h1>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", flexDirection: "row", gap: "10px", padding: "20px", borderRadius: "5px" }}>
        {bestSellingProducts.map((product) => (
          <ProductCard
            id={product._id}
            image={product.image}
            title={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
