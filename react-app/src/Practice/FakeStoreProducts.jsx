import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const FakeStoreProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products, "products");
  const [loading, setLoading] = useState(false);
  function fetchData() {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((jsData) => {
        // console.log(jsData);
        setProducts(jsData);
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {products.length > 0 ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {products.map((product) => (
                <ProductCard
                  brand={product.category}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div>
          ) : (
            <h1>No product stock.</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default FakeStoreProducts;
