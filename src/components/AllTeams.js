import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//first get a list of all teams in object-array form

const AllTeams = () => {
  const TEAMS_URL = "https://api.sportsdata.io/v3/mlb/scores/json/teams";

  const key = "b0434d0191f2464c92b660381abf3f4b";

  fetch(`${TEAMS_URL}?key=${key}`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let teamsObject = json;
      return teamsObject;
    });

  return (
    <div id="teams-view">
      <h3>{`${teamsObject}`}</h3>
    </div>
  );
};

export default AllTeams;
