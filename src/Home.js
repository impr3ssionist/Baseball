import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { fetchStatus } from "./api";
import Nav from "./components/Nav";
import Favorites from "./components/favorites";
import TeamWidget from "./components/TeamWidget";
import AllTeams from "./components/AllTeams";

const Home = () => {
  // const API_SPORTS_URL = "https://api-baseball.p.rapidapi.com/";

  // const [status, setStatus] = useState({});

  // useEffect(() => {
  //   async function fetchStatus() {
  //     const response = await fetch(`${API_SPORTS_URL}/status`);
  //     const data = await response.json();
  //     console.log(data);
  //   }
  // });

  return (
    <>
      <Favorites></Favorites>
      <TeamWidget></TeamWidget>
    </>
  );
};

export default Home;
