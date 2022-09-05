import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./componets/navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Projects from "./pages/projects";
import Socials from "./pages/socials";
import Error from "./pages/error";
import Login from "./pages/login";

function App() {
  useEffect(() => {
    document.title = "Projects | petersell.dev";
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
