import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";
import { toast } from "react-hot-toast";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  });
  console.log(passwordData, "passwordData")
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put("/user/change-password", passwordData);
      if (response.data.success) {
        toast.success(response.data.message);
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: ""
        });
      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error, "error");
    }
  }
  const handleChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  }

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
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Current Password</label><br />
        <input value={passwordData.currentPassword} onChange={handleChange} name="currentPassword" type="password" /><br />
        <label>New Password</label><br />
        <input value={passwordData.newPassword} onChange={handleChange} name="newPassword" type="password" /><br />
        <label>Confirm New Password</label><br />
        <input value={passwordData.confirmNewPassword} onChange={handleChange} name="confirmNewPassword" type="password" /><br />
        <input type="submit" /><br />
      </form>
    </div>
  );
};

export default Profile;
