import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";
import ProductCard from "../../components/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const convertToCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getAllProducts = async () => {
    try {
      const response = await api.get("/user/products");
      if (response.data.success) {
        // console.log(response.data.products, "products");
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
        // Extract unique categories
        const uniqueCategories = [
          ...new Set(
            response.data.products.map((product) =>
              convertToCapitalize(product.category),
            ),
          ),
        ];
        setCategory(uniqueCategories);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const filterProductWithCategory = (category) => {
    if(category === "all"){
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => 
        convertToCapitalize(product.category) === category
      );
      setFilteredProducts(filtered);
    }
    
  }

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          height: "calc(100vh - 70px)",
        }}
      >
        <div
          style={{
            width: "18%",
            border: "2px solid black",
            padding: "20px",
            height: "100%",
          }}
        >
          <p>Filter</p>
          <label>Select Category</label>
          <br />
          <select onChange={(e) => filterProductWithCategory(e.target.value)}>
            <option value="all">All</option>
            {category.map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
          </select>
          <br />
          <label>Price</label>
          <br />
          <label>Min</label>
          <input />
          <br />
          <label>Max</label>
          <input />
        </div>

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
          {filteredProducts.map((product) => (
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
    </div>
  );
};

export default AllProducts;
