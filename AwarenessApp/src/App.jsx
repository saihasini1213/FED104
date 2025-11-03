// App.js

import React, { useState, useEffect } from "react";
import Auth from './Auth'; // Import the Auth module
import Home from './Home'; // Import the Home module

// --- Static Data ---
const quizData = [
  { q: "Who is known as the Father of the Indian Constitution?", o: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru"], a: 1 },
  { q: "When did the Indian Constitution come into effect?", o: ["15th August 1947", "26th January 1950", "2nd October 1952"], a: 1 },
  { q: "Which article guarantees the Right to Equality?", o: ["Article 14", "Article 21", "Article 19"], a: 0 },
  { q: "What is the Preamble?", o: ["An introduction", "A law", "A schedule"], a: 0 },
  { q: "How many Fundamental Duties are there?", o: ["10", "11", "12"], a: 1 }
];

export default function App() {
  const [user, setUser] = useState(localStorage.getItem("loggedInUser") || "");
  const [view, setView] = useState(user ? "home" : "signin");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  // Effect to persist user login status
  useEffect(() => {
    if (user) localStorage.setItem("loggedInUser", user);
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser("");
    setView("signin");
    setFormData({ name: "", email: "", password: "" }); // Reset form data on logout
  };

  const nextView = (newView) => setView(newView);
  const updateFormData = (data) => setFormData(prev => ({ ...prev, ...data }));
  const loginUser = (name) => setUser(name);

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1>Indian Constitution Awareness</h1>
        <p>Empowering citizens with knowledge of their rights and duties 🇮🇳</p>
      </header>

      <nav style={styles.nav}>
        {user && (
          <>
            <a href="#preamble">Preamble</a>
            <a href="#rights">Rights & Duties</a>
            <a href="#quiz">Quiz</a>
            <a href="#timeline">Timeline</a>
          </>
        )}
        <div style={styles.auth}>
          {user ? (
            <>
              <span>Welcome, {user}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => setView("signin")}>Sign In</button>
              <button onClick={() => setView("signup")}>Sign Up</button>
            </>
          )}
        </div>
      </nav>

      {/* Conditional Rendering of Views */}
      {(view === "signin" || view === "signup") ? (
        <Auth
          view={view}
          formData={formData}
          updateFormData={updateFormData}
          nextView={nextView}
          loginUser={loginUser}
          styles={styles} // Pass styles down for consistency
        />
      ) : (
        <Home
          quizData={quizData}
          styles={styles} // Pass styles down for consistency
        />
      )}

      <footer style={styles.footer}>
        © 2025 Indian Constitution Awareness | Educational Purpose
      </footer>
    </div>
  );
}

// --- Styles moved here for easy reference/import, but ideally would be in a separate CSS file ---
const styles = {
  body: { fontFamily: "Poppins, sans-serif", background: "linear-gradient(180deg,#FF9933 0%,#FFFFFF 50%,#138808 100%)", minHeight: "100vh" },
  header: { background: "rgba(0,0,0,0.7)", color: "#fff", textAlign: "center", padding: "2rem 1rem" },
  nav: { background: "#0b3d91", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", color: "white", padding: "1rem" },
  auth: { marginLeft: "auto", display: "flex", alignItems: "center", gap: "1rem" },
  section: { background: "rgba(255,255,255,0.9)", margin: "2rem auto", borderRadius: 10, padding: "2rem", maxWidth: 900 },
  cards: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "1rem" },
  card: { background: "#fff", padding: "1.2rem", borderRadius: 8, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
  optionBtn: { margin: "0.5rem", padding: "0.6rem 1rem", background: "#0b3d91", color: "#fff", border: "none", borderRadius: 5, cursor: "pointer" },
  footer: { background: "#0b3d91", color: "white", textAlign: "center", padding: "1rem" }
};