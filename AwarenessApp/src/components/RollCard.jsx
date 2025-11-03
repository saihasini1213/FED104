import React from "react";
import { Link } from "react-router-dom";

export default function RoleCard({ title, description, path }) {
  return (
    <div className="role-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={path} className="btn">Go to {title}</Link>
    </div>
  );
}
