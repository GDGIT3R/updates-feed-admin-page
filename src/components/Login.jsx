import { useState } from "react";
import { ADMIN_USER, ADMIN_PASS } from "../config/auth";

export default function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem("adminAuth", "true");
      setAuth(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}