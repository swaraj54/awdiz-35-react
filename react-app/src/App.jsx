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
import UseEffect from "./Practice/UseEffect";
import FakeStoreProducts from "./Practice/FakeStoreProducts";
import UseMemo from "./Practice/UseMemo";
import RevisionUseState from "./Practice/RevisionUseState";
import UseCallback from "./Practice/UseCallback";

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
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/FakeStoreProducts" element={<FakeStoreProducts />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/revision-usestate" element={<RevisionUseState />} />
        <Route path="/useCallback" element={<UseCallback />} />
      </Routes>
    </>
  );
}

export default App;

// useNavigate - Completed
// useParams - Completed
// useState - Completed
// useEffect - Completed
// useMemo - Completed
// memo() - Completed
// useCallback - Completed
// useRef
// useReducer
// useContext
// Redux 
