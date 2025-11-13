import React, { useEffect, useState } from "react";
import { getAdminRequestList } from "./SuperAdminApi/SuperAdminApi";
import AdminRequestCard from "./Views/AdminRequestCard";

function SuperAdmin() {
  const [users, setUsers] = useState([]);

  const getSuperAdminRequestList = async () => {
    try {
      const response = await getAdminRequestList();
      if (response?.success && Array.isArray(response.data)) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error("Error fetching admin request list:", error);
    }
  };

  const handleAccept = (userId) => {
    console.log("Accepted user:", userId);
    // Call API to approve user
  };

  const handleReject = (userId) => {
    console.log("Rejected user:", userId);
    // Call API to reject user
  };

  useEffect(() => {
    getSuperAdminRequestList();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "250px", margin: "0 auto" }}>
      <h2>👑 Super Admin Dashboard</h2>
      <h3>Pending Admin Requests</h3>

      {users.length === 0 ? (
        <p>No user requests found.</p>
      ) : (
        users.map((user) => (
          <AdminRequestCard
            key={user._id}
            user={user}
            onAccept={handleAccept}
            onReject={handleReject}
          />
        ))
      )}
    </div>
  );
}

export default SuperAdmin;
