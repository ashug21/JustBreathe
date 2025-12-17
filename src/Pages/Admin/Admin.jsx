import React, { useState } from "react";
import "./Admin.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Admin = () => {

  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const LoginAdmin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/admin/login",
        { username, password }
      );

      if (!response.data.success) {
        toast.error(response.data.message || "Something went wrong");
        return;
      }

      toast.success("Admin login successful");

      localStorage.setItem("isAdmin", "true");   // ✅ STEP 1 — ADDED HERE

      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Server error"
      );
    }
  };

  return (
    <div className="admin-login39">
      <div className="admin-card39">
        <h2 className="admin-title39">Admin Login</h2>
        <p className="admin-subtitle39">Please sign in to continue</p>

        <form className="admin-form39" onSubmit={LoginAdmin}>
          <div className="admin-field39">
            <label className="admin-label39">Username</label>
            <input
              type="text"
              placeholder="Enter admin username"
              className="admin-input39"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
          </div>

          <div className="admin-field39">
            <label className="admin-label39">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="admin-input39"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button type="submit" className="admin-btn39">
            Login
          </button>
        </form>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3800,
          style: {
            background: "#235656",
            color: "#FFF5E9",
            borderRadius: "10px",
            fontSize: "14px",
          },
        }}
      />
    </div>
  );
};

export default Admin;
