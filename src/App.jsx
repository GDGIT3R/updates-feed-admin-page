import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [auth, setAuth] = useState(
    localStorage.getItem("adminAuth") === "true"
  );

  return auth ? (
    <Dashboard setAuth={setAuth} />
  ) : (
    <Login setAuth={setAuth} />
  );
}

export default App;