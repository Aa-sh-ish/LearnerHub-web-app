import React from "react";
import { useNavigate } from "react-router-dom";

import Dashimage1 from "./DashboardImages/dashboard3.jpg"
import Dashimage2 from "./DashboardImages/dashboard2.jpg"
import Dashimage3 from "./DashboardImages/dahsboard1.jpg"

function HomePage() {
  const navigate = useNavigate();

  const courses = [
    { id: 1, title: "Web Development", description: "Learn React, Node.js, and APIs" },
    { id: 2, title: "Data Science", description: "Python, Pandas, and Machine Learning" },
    { id: 3, title: "Mobile App Development", description: "Build apps with Flutter or Kotlin" },
  ];

  return (
    <div style={{ 
      padding: 0,
      margin: 0,
      height: "100%",
      overflowY: "auto",
      backgroundColor: "#f9f9f9",
      scrollbarColor: "#ccc transparent",
        }}>
      {/* Hero Section with Background Image */}
      <div
        style={{
          position: "relative",
          height: "50vh",
          backgroundImage: `url(${Dashimage1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
          padding: "60px 80px",
        }}
      >
        {/* Overlay for darkening the background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        {/* Left Text */}
        <div style={{ position: "relative", zIndex: 2, flex: 1 }}>
          <h1 style={{ fontSize: "2.8rem", marginBottom: 20, lineHeight: 1.3 }}>
            Knowledge. <br />
            Accessible. <br />
            Anytime, Anywhere.
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: 450 }}>
            Explore hundreds of expertly curated courses designed for students worldwide.
          </p>
        </div>

        {/* Right Image */}
        <div style={{ position: "relative", zIndex: 2, flex: 1, textAlign: "right" }}>
          <img
            src= {Dashimage3}
            alt="Student"
            style={{
              width: "70%",
              borderRadius: "10px",
              objectFit: "contain",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
            }}
          />
        </div>
      </div>

      {/* Courses Section */}
      <div style={{ padding: "50px 60px" }}>
        <h2 style={{ marginBottom: 20 }}>📚 Popular Courses</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{course.title}</h3>
              <p style={{ color: "#666" }}>{course.description}</p>
              <button
                onClick={() => navigate(`/courses/${course.id}`)}
                style={{
                  marginTop: 10,
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default HomePage;
