import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { fetchStatus } from "./api";
import Nav from "./components/Nav";
import Favorites from "./components/favorites";
import TeamWidget from "./components/TeamWidget";

const Home = () => {
  const API_SPORTS_URL = "https://api-baseball.p.rapidapi.com/";

  const [status, setStatus] = useState({});

  useEffect(() => {
    async function fetchStatus() {
      const response = await fetch(`${API_SPORTS_URL}/status`);
      const data = await response.json();
      console.log(data);
    }
  });

  return (
    <div className="home-page-view">
      <h1 id="home-title">Home-title</h1>
      <Nav></Nav>
      <Favorites></Favorites>
      <TeamWidget></TeamWidget>
    </div>
  );
};

export default Home;
