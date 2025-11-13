import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./Components/Auth/AuthContext";

import LoginForm from "./Components/Auth/LoginForm";
import ChatPage from "./Components/Chat/chat";
import Dashboard from "./Components/Dashboard/Dashboard";
import Courses from "./Components/Courses/Courses";
import Liveclasses from "./Components/LiveClasses/LiveClasses";
import Profile from "./Components/Profile/Profile";
import MainLayout from "./Components/Home/Home";
import SuperAdmin from "./Components/SuperAdmin/SuperAdmin";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<LoginForm />} />

        {/* ✅ Protected routes inside drawer layout */}
        {isAuthenticated && (
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/liveclasses" element={<Liveclasses />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        )}

        {/* Example for Chat (outside layout if needed) */}
        <Route
          path="/chat"
          element={
            isAuthenticated ? <ChatPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/superAdmin"
          element={
            isAuthenticated ? <
            SuperAdmin /> : <Navigate to="/superAdmin" />
          }
        />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
