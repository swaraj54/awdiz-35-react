import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../../config/axiosConfig";
import ProductCard from "../../components/ProductCard";
import { toast } from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [addresses, setAddresses] = useState([]);
  console.log(addresses, "addresses");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressData, setAddressData] = useState({
    street: "",
    city: "",
    pincode: "",
  });
  const [showCreateAddressModel, setShowCreateAddressModel] = useState(false);

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

  const placeOrder = async () => {
    try {
      if (!selectedAddress) return toast.error("Address is required.");
      const response = await api.post("/user/place-order", selectedAddress);
      if (response.data.success) {
        toast.success(response.data.message);
        setProductData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createNewAddress = async (event) => {
    event.preventDefault();
    try {
      if (!addressData?.street || !addressData?.city || !addressData?.pincode) {
        toast.error("All fields are mandatory.");
        return;
      }
      const response = await api.post("/user/create-address", addressData);
      if (response.data.success) {
        toast.success(response.data.message);
        setAddresses(response.data.addresses);
        setShowCreateAddressModel(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setAddressData({ ...addressData, [event.target.name]: event.target.value });
  };

  const getAddress = async () => {
    try {
      const response = await api.get(`/user/get-addresses`);
      if (response.data.success) {
        setAddresses(response.data.addresses);
        if (response.data.addresses.length == 0) {
          setShowCreateAddressModel(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  useEffect(() => {
    getUserCartProducts();
    getAddress();
  }, []);
  return (
    <div>
      <h1>Cart</h1>
      <div style={{ display: "flex" }}>
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
        <div>
          <h2>Add a coupon.</h2>
          <input />
          <br />
          <br />
          <br />
          {addresses?.length > 0 && showCreateAddressModel == false && (
            <>
              {addresses.map((address) => (
                <div>
                  <input
                    onChange={() => handleSelectAddress(address)}
                    name="Hello"
                    type="radio"
                  />
                  <h3>
                    {address.street} {address.city} {address.pincode}
                  </h3>
                </div>
              ))}
              <button onClick={() => setShowCreateAddressModel(true)}>
                Create New Address
              </button>
            </>
          )}
          <br />
          {showCreateAddressModel && (
            <>
              <h2>Select/Create addresses</h2>
              <form onSubmit={createNewAddress}>
                <label>Street</label>
                <br />
                <input
                  value={addressData.street}
                  name="street"
                  onChange={handleChange}
                />
                <br />
                <label>City</label>
                <br />
                <input
                  value={addressData.city}
                  name="city"
                  onChange={handleChange}
                />
                <br />
                <label>Pincode</label>
                <br />
                <input
                  value={addressData.pincode}
                  name="pincode"
                  onChange={handleChange}
                />
                <br />
                <input type="submit" value="Save new addresses" />
              </form>
              {addresses?.length > 0 && (
                <button onClick={() => setShowCreateAddressModel(false)}>
                  Back to Saved addresses
                </button>
              )}
            </>
          )}
          <br />
          <br />
          <br />
          <button onClick={placeOrder}>Place order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
