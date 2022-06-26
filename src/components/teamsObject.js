//first get a list of all teams in object-array form

const TEAMS_URL = "https://api.sportsdata.io/v3/mlb/scores/json/teams";

const key = "b0434d0191f2464c92b660381abf3f4b";

fetch(`${TEAMS_URL}?key=${key}`)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    return json;
  });

//   {
//   method: "GET",
//   headers: {
//     "key": key,
//   },

//   }),
// };
