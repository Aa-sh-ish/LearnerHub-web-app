import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../../assets/logo.png"
import "./LoginForm.css";

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    username: "",
    dob: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${activeTab.toUpperCase()} DATA:\n` + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="login-background">
        <img src= {logo} alt="App Logo" className="logo" />
      <div className="overlay"></div>

      <div className="login-card">
        {/* Back Icon */}
      {/* Show Back Icon only when activeTab is 'register' */}
      {activeTab === "register" && (
        <div className="card-header">
          <FaArrowLeft
            className="back-icon"
            onClick={() => {
              if (step > 1) {
                setStep(prev => prev - 1); // Go back one step if inside register flow
              } else {
                setActiveTab("login"); // Otherwise switch back to login tab
              }
            }}
          />
        </div>
      )}

        {/* Tabs */}
        <div className="tab-container">
          <button
            className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`tab-btn ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* LOGIN FORM */}
        {activeTab === "login" && (
          <form onSubmit={handleSubmit} className="form-content">
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Login</button>
          </form>
        )}

        {/* REGISTER FORM */}
        {activeTab === "register" && (
          <form onSubmit={handleSubmit} className="form-content">
            {step === 1 && (
              <>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="button" onClick={() => setStep(2)}>
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div className="input-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit">Register</button>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
