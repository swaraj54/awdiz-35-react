import ProductCard from "../components/ProductCard";

function Products() {
  const productsData = [
    {
      title: "Tshirt",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUmMWcC0q1O3eQAE5w5gvJWiCZTu5XKIVfiLLpaiAtA&s=10",
    },
    {
      title: "Jeans",
      price: 3500,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    },
    {
      title: "Sneakers",
      price: 4999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      title: "Hoodie",
      price: 2999,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    },
    {
      title: "Watch",
      price: 7999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      title: "Backpack",
      price: 2499,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    },
    {
      title: "Cap",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500",
    },
    {
      title: "Sunglasses",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    },
    {
      title: "Headphones",
      price: 5999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      title: "Laptop Bag",
      price: 3299,
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500",
    },
  ];
  async function getProducts(){
    try {
        const response = await axios.get("/products/all")
        if(response.data.succes){}
    }catch(error){
        console.log(error)
    }
  }
  getProducts();
  return (
    <div>
      <h1>Products</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {productsData.map((product) => (
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
