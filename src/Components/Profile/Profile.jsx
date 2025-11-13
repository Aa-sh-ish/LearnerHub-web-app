import React, { useEffect, useState } from "react";
import TokenManager from "../../Managers/TokenManager"; 
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Profile component is rendered");
    getProfileInfo();
  }, []);

  const getProfileInfo = () => {
    const decoded = TokenManager.decodeToken();
    if (decoded) {
      console.log("Decoded user:", decoded);
      setUserData(decoded);
    }
  };

  const handleAdminLogin = () => {
    navigate("/superAdmin");
   toast.success("Logged in as Admin!");
  };

 return (
  <div>
    <h2>👤 Profile</h2>
    {userData ? (
      <>
        <p>
          Welcome, <strong>{userData.username}</strong>!
        </p>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
        <p>DOB: {new Date(userData.dob).toLocaleDateString()}</p>

        {(userData.isAdmin || userData.isSuperAdmin) && (
          <button onClick={handleAdminLogin} style={buttonStyle}>
            {userData.isSuperAdmin
              ? "Go to Super Admin Dashboard"
              : "Go to Admin Dashboard"}
          </button>
        )}
      </>
    ) : (
      <p>Loading profile...</p>
    )}
  </div>
);

}

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "10px 16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px"
};

export default Profile;
