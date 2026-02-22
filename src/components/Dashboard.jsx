import UpdateForm from "./UpdateForm";

export default function Dashboard({ setAuth }) {
  const logout = () => {
    localStorage.removeItem("adminAuth");
    setAuth(false);
  };

  return (
    <div className="container">
      <button onClick={logout}>Logout</button>
      <UpdateForm />
    </div>
  );
}