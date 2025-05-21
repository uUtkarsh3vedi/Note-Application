import React, { useState } from "react";
import { registerUser } from "../api/userApi";
import { useAuth } from "../context/AuthContext";
import "../styles/DashboardLayout.css";  // import the CSS

const RegisterForm = () => {
  const { setUserId, setToken } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, userId } = await registerUser(formData);
      setUserId(userId);
      setToken(token);
      alert("Registered successfully");
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert("Registration failed");
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required />
      <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
