import React, { useState } from "react";

function AdminRequestCard({ user, onAccept, onReject }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      onClick={handleToggle}
      style={{
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px 20px",
        marginBottom: "15px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {/* Compact view */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h4 style={{ margin: 0 }}>{user.username}</h4>
          <p style={{ margin: "5px 0", color: "#555" }}>{user.email}</p>
        </div>
        <div>{expanded ? "▲" : "▼"}</div>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #eee" }}>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>DOB:</strong> {new Date(user.dob).toLocaleDateString()}</p>
          <p><strong>Parent Email:</strong> {user.parentEmail}</p>
          <p><strong>Admin Request:</strong> {user.adminRequest ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Admin Approved:</strong> {user.adminApproved ? "✅ Yes" : "❌ No"}</p>

          <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAccept(user._id);
              }}
              style={{
                flex: 1,
                padding: "8px 12px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#28a745",
                color: "white",
                cursor: "pointer",
              }}
            >
              ✅ Accept
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onReject(user._id);
              }}
              style={{
                flex: 1,
                padding: "8px 12px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#dc3545",
                color: "white",
                cursor: "pointer",
              }}
            >
              ❌ Reject
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminRequestCard;
