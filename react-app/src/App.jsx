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
import { useDispatch, useSelector } from "react-redux";
import ProjectNavbarAdmin from "./components/ProjectNavbarAdmin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ViewSellers from "./pages/admin/ViewSellers";
import ViewUsers from "./pages/admin/ViewUsers";
import SellerDashboard from "./pages/seller/SellerDashboard";
import ProjectNavbarSeller from "./components/ProjectNavbarSeller";
import CreateProduct from "./pages/seller/CreateProduct";
import ViewProducts from "./pages/seller/ViewProducts";
import ViewProductsForAdmin from "./pages/admin/ViewProductsForAdmin";

function App() {
  const userData = useSelector((data) => data.auth.user);
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
    getCurrentUser();
  }, []);
  console.log(!userData?.role, "checkl");
  return (
    <>
      {/* <Navbar /> */}
      {userData?.role === "admin" && <ProjectNavbarAdmin />}
      {(!userData?.role || userData?.role === "user") && <ProjectNavbar />}
      {userData?.role === "seller" && <ProjectNavbarSeller />}

      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/sellers" element={<ViewSellers />} />
        <Route path="/admin/users" element={<ViewUsers />} />
        <Route path="/admin/products" element={<ViewProductsForAdmin />} />

        {/* SELLER ROUTES */}
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/create-product" element={<CreateProduct />} />
        <Route path="/seller/view-products" element={<ViewProducts />} />

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
