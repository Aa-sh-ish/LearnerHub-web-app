// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";

import './App.css';
import { AuthContext } from "./Components/Auth/AuthContext";
import HomePage  from "./Components/Home/home";
import ChatPage from "./Components/Chat/chat";
import LoginForm from './Components/Auth/LoginForm';

function App() {
  const { isAuthenticated } = useContext(AuthContext); // ✅ This will now work
  console.log("Authentication status:", isAuthenticated);
  console.log("Token value:", localStorage.getItem("authToken"));

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
        <Route
          path="/home"
          element={
            isAuthenticated ? <HomePage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/chat"
          element={
            isAuthenticated ? <ChatPage /> : <Navigate to="/login" />
          }
        />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
