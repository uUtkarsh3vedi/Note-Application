
import { Link, Outlet } from "react-router-dom";
import "../styles/DashboardLayout.css"; 

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2>Notes App</h2>
        <ul className="nav-links">
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/create">Create Note</Link></li>
          <li><Link to="/my-notes">My Notes</Link></li>
          <li><Link to="/share">Share Note</Link></li>
          <li><Link to="/shared">Shared Notes</Link></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <Outlet /> 
      </div>
    </div>
  );
};

export default DashboardLayout;
