import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NextLink from "next/link";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <NextLink href="/settings">Settings</NextLink>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/" element={<h2>Home</h2>} />
        </Routes>
      </div>
    </Router>
  );
}
