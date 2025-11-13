import React, { use } from "react";
import { useEffect } from "react";

function Courses() {
  useEffect(() => {
   console.log("Courses component is rendered");
  }, []);

  const customFunction = () => {
    console.log("Custom function in Courses component");
  }

  return (
    <div>
      <h2>📚 Courses</h2>
      <p>Welcome to the Courses page!</p>
    </div>
  );
}

export default Courses;
