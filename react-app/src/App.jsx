import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";
import UseState from "./Practice/UseState";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/single-product/:brandName/:productId"
          element={<SingleProduct />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />



        <Route path="/usestate" element={<UseState />} />
      </Routes>
    </>
  );
}

export default App;

// useNavigate - Completed
// useParams - Completed
// useState
// useEffect
// useMemo
// memo()
// useCallback
// useRef
// useReducer
// useContext
