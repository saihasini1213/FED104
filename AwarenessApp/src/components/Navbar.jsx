import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Indian Constitution Awareness</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/educator">Educator</Link>
        <Link to="/citizen">Citizen</Link>
        <Link to="/legal-expert">Legal Expert</Link>
      </div>
    </nav>
  );
}
