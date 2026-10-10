import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    try {
      const response = await api.get("/admin/get-all-users");
      if (response.data.success) {
        setUsers(response.data.users);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      <h1>All Users</h1>
      {/* Add your admin dashboard content here */}
      <div>
        {users?.length > 0 ? (
          <div style={{ display: "flex" , flexWrap: "wrap" }}>
            {users.map((user, index) => (
              <section
                key={user._id}
                style={{
                  padding: "30px",
                  border: "1px solid black",
                  margin: "10px",
                  cursor: "pointer",
                  width: "23%",
                }}
              >
                <h2>Sr. No. : {index + 1}</h2>
                <h2>Name : {user.name}</h2>
                <h2>Email : {user.email}</h2>
                <button>View Details</button>
              </section>
            ))}
          </div>
        ) : (
          <p>No Users found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewUsers;