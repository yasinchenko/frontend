// src/pages/Login.tsx
import { useState } from "react";
import api from "@/services/api";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        username: email,
        password: password,
      });
      const token = res.data.access_token;
      localStorage.setItem("access_token", token);
      alert("Login successful");
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold">IoT Control Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border rounded p-2 w-72"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border rounded p-2 w-72"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
      <Link
        to="/register"
        className="text-blue-600 hover:underline"
      >
        Don't have an account? Register
      </Link>
    </div>
  );
}
