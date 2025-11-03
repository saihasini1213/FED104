import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My Simple Website</h1>
        <p>A minimal React project created with Vite ⚡</p>
      </header>

      <main>
        <section>
          <h2>About</h2>
          <p>
            This is a simple React website built using Vite. You can edit the
            text and styles in <code>App.jsx</code> and <code>App.css</code>.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>📧 Email: example@email.com</p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} My Simple Website</p>
      </footer>
    </div>
  );
}

export default App;
