import React from "react";
import RoleCard from "../components/RoleCard";

export default function Home() {
  const roles = [
    {
      title: "Admin",
      description: "Oversee platform content and manage user roles.",
      path: "/admin",
    },
    {
      title: "Educator",
      description: "Create educational content and conduct sessions.",
      path: "/educator",
    },
    {
      title: "Citizen",
      description: "Explore, learn, and engage in discussions.",
      path: "/citizen",
    },
    {
      title: "Legal Expert",
      description: "Offer legal insights and provide guidance.",
      path: "/legal-expert",
    },
  ];

  return (
    <div className="home">
      <h2>Welcome to the Indian Constitution Awareness Platform</h2>
      <p>
        Learn about your rights, duties, and the framework of our Constitution.
      </p>

      <div className="roles-container">
        {roles.map((role) => (
          <RoleCard key={role.title} {...role} />
        ))}
      </div>
    </div>
  );
}
