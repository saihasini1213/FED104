// Auth.js

import React from 'react';

export default function Auth({ view, formData, updateFormData, nextView, loginUser, styles }) {
  
  const handleSignup = () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields!");
      return;
    }
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Registration successful! Please sign in.");
    nextView("signin");
  };

  const handleSignin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) {
      alert("No user found. Please sign up first.");
      return;
    }
    if (formData.email === savedUser.email && formData.password === savedUser.password) {
      loginUser(savedUser.name);
      nextView("home");
    } else {
      alert("Invalid email or password!");
    }
  };

  if (view === "signup") {
    return (
      <div style={styles.section}>
        <h2>Sign Up</h2>
        <input
          placeholder="Full Name"
          onChange={(e) => updateFormData({ name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => updateFormData({ email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => updateFormData({ password: e.target.value })}
        />
        <button onClick={handleSignup}>Register</button>
        <p>
          Already have an account?{" "}
          <span style={{ color: "#0b3d91", cursor: "pointer" }} onClick={() => nextView("signin")}>
            Sign In
          </span>
        </p>
      </div>
    );
  }

  // Default to Sign In view if not signup
  return (
    <div style={styles.section}>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => updateFormData({ email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => updateFormData({ password: e.target.value })}
      />
      <button onClick={handleSignin}>Login</button>
      <p>
        Don’t have an account?{" "}
        <span style={{ color: "#0b3d91", cursor: "pointer" }} onClick={() => nextView("signup")}>
          Sign Up
        </span>
      </p>
    </div>
  );
}