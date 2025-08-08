import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3EABB]">
      <div className="relative w-[350px] sm:w-[400px] bg-gradient-to-b from-[#1076BB] to-white rounded-2xl shadow-lg px-8 py-6 text-white">
        {/* Close Button */}
        <button
          className="absolute top-0 right-0 bg-black text-white w-8 h-8 rounded-bl-2xl text-lg"
          onClick={() => navigate("/")} // kembali ke home
        >
          X
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 mt-2">Masuk</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="text-white text-sm">Email</label>
          <div className="flex items-center border-b border-white py-1">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-white placeholder-white flex-1 px-2 py-1 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaEnvelope className="text-white text-sm" />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="text-white text-sm">Password</label>
          <div className="flex items-center border-b border-white py-1">
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-white placeholder-white flex-1 px-2 py-1 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="text-white text-sm" />
          </div>
        </div>

        {/* Remember and Forgot */}
        <div className="flex justify-between items-center text-sm mb-4 text-white/70">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-white" />
            <span>Remember me</span>
          </label>
          <button className="hover:underline">Forget Password?</button>
        </div>

        {/* Login Button */}
        <button
          onClick={() => alert("Login clicked")}
          className="bg-[#FDCD25] text-white font-bold w-full py-2 rounded-full"
        >
          Login
        </button>

        {/* Register */}
        <div className="text-center text-white/70 mt-4 text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="font-bold text-white hover:underline cursor-pointer"
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
