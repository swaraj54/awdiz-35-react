import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import api from "../../config/axiosConfig";

const CreateProduct = () => {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("Tshirt");
  console.log(productName, "productName");
  const [productPrice, setProductPrice] = useState("2000");
  console.log(productPrice, "productPrice");
  const [productDescription, setProductDescription] = useState("Cotton Tshirt");
  console.log(productDescription, "productDescription");
  const [productImage, setProductImage] = useState("https://caslay.in/cdn/shop/files/4M6A7470_60c8cb10-3c1b-4814-9fa3-d2cf8330d6ad.jpg?v=1761468970&width=1946");
  console.log(productImage, "productImage");
  const [productCategory, setProductCategory] = useState("clothing");
  console.log(productCategory, "productCategory");
  const [productStock, setProductStock] = useState("100");
  console.log(productStock, "productStock");


  const [userRole, setUserRole] = useState("user");
  console.log(userRole, "userRole");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/seller/create-product", {
        name: productName,
        price: productPrice,
        description: productDescription,
        image: productImage,
        category: productCategory,
        stock: productStock,
      });
      if (response.data.success == true) {
        toast.success(response.data.message);
        navigate("/seller/view-products");
      }
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error, "error");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name : {productName}</label>
        <br />
        <input
          type="text"
          onChange={(event) => setProductName(event.target.value)}
          name="name"
          value={productName}
        />
        <br/>
        <label>Price : </label>
        <br />
        <input
          type="text"
          onChange={(event) => setProductPrice(event.target.value)}
          name="price"
          value={productPrice}
        />
        <br/>
        <label>Description : </label>
        <br />
        <input
          type="text"
          onChange={(event) => setProductDescription(event.target.value)}
          name="description"
          value={productDescription}
        />
        <br/>
        <label>Image : </label>
        <br />
        <input
          type="text"
          onChange={(event) => setProductImage(event.target.value)}
          name="image"
          value={productImage}
        />
        <br/>
        <label>Category :</label>
        <br />
        <input
          type="text"
          onChange={(event) => setProductCategory(event.target.value)}
          name="category"
          value={productCategory}
        />
        <br/>
        <label>Stock : </label>
        <br />
        <input
          type="text"
          onChange={(event) => setProductStock(event.target.value)}
          name="stock"
          value={productStock}
        />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
};


export default CreateProduct;