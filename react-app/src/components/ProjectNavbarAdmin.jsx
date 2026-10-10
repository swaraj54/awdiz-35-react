import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import api from "../config/axiosConfig";
import { logout } from "../redux/authSlice";
import toast from "react-hot-toast";

const ProjectNavbarAdmin = () => {
  const userData = useSelector((data) => data.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const response = await api.get("/auth/logout");
      if (response.data.success) {
        dispatch(logout());
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "70px",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "black",
        color: "white",
        alignItems: "center",
      }}
    >
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/admin/dashboard")}>
        Home
      </h2>
      {userData?.name ? (
        <>
          <h2
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/admin/sellers")}
          >
            View Sellers
          </h2>
          <h2
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/admin/users")}
          >
            View Users
          </h2>
          <h2 style={{ cursor: "pointer" }} onClick={logoutHandler}>
            Logout
          </h2>{" "}
        </>
      ) : (
        <>
          <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
            Login
          </h2>
          <h2
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </h2>
        </>
      )}
    </div>
  );
};

export default ProjectNavbarAdmin;
