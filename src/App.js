import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { fetchStatus } from "./api";
import Nav from "./components/Nav";
import Favorites from "./components/favorites";
import TeamWidget from "./components/TeamWidget";
import AllTeams from "./components/AllTeams";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <h1 id="home-title">Home-title</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allteams" element={<AllTeams />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
