
import React from "react";
import TokenManager from "../../Managers/TokenManager";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    TokenManager.removeToken();
    toast.info("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🏠 Home Page</h2>
      <p>Welcome! You are logged in.</p>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
}

export default HomePage;