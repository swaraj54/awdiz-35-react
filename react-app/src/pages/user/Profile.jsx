import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  // profile - name, email, phone number  , password change option,
  // order history
  // address
  const getUserProfileData = async () => {
    try {
      const response = await api.get("/user/profile");
      if (response.data.success) {
        setProfileData(response.data.profile);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };
  useEffect(() => {
    getUserProfileData();
  }, []);
  return (
    <div>
      <h1>Profile Page</h1>
      {profileData && (
        <div>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <p>Phone: {profileData.phone}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
