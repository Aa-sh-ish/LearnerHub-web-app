import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TokenManager from "../../Managers/TokenManager";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(window.innerWidth >= 1024);

  const handleLogout = () => {
    TokenManager.removeToken();
    toast.info("Logged out successfully!");
    navigate("/login");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDrawerOpen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  return (
    <div className="home-container">
      {/* Drawer */}
      <div className={`drawer ${isDrawerOpen ? "open" : "closed"}`}>
        <h3 className="drawer-title">My App</h3>
        <ul className="drawer-menu">
          <li onClick={() => navigate("/home")}>🏠 Dashboard</li>
          <li onClick={() => navigate("/courses")}>📚 Courses</li>
          <li onClick={() => navigate("/liveclasses")}>🎥 Live Classes</li>
          <li onClick={() => navigate("/profile")}>👤 Profile</li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      
      {/* Main Content */}
      <div className="content">
        {/* Drawer toggle (visible on small screens) */}
        <button
          className="drawer-toggle"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          
        </button>

        {/* Render child routes here */}
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
