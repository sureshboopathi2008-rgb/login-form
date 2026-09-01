import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">LoginApp</div>

      <button onClick={logout} className="logout-button">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;