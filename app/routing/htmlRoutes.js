//REQUIRE DEPENDENCIES===============================================
const path = require("path");

//ROUTING========================================================
module.exports = (app) => {

  //Survey Dog
  app.get("/surveyDogs", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/surveyDogs.html"));
  });

  //Survey Cats
  app.get("/surveyCats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/surveyCats.html"));
  });

  //Default Home
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  });
};