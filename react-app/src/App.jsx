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
import UseRef from "./Practice/UseRef";
import UseReducer from "./Practice/UseReducer";
import ContextCounter from "./Practice/ContextCounter";
import ReduxCounter from "./Practice/ReduxCounter";
import ProjectNavbar from "./components/ProjectNavbar";
import { useEffect } from "react";
import api from "./config/axiosConfig";
import { login } from "./redux/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const getCurrentUser = async () => {
    try {
      const response = await api.get("/auth/get-current-user");
      if (response.data.success) {
        dispatch(login(response.data.user));
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getCurrentUser()
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <ProjectNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/products" element={<Products />} />
        <Route
          path="/single-product/:brandName/:productId"
          element={<SingleProduct />}
        />
        <Route path="*" element={<NotFound />} />

        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/FakeStoreProducts" element={<FakeStoreProducts />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/revision-usestate" element={<RevisionUseState />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/contextCounter" element={<ContextCounter />} />
        <Route path="/reduxCounter" element={<ReduxCounter />} />
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
// useRef - Completed
// useReducer - Completed
// useContext - Completed
// Redux
// const state = useSelector()
// useDispatch()
