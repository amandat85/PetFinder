//REQUIRE DEPENDENCIES===============================================
const path = require("path");

//ROUTING========================================================
module.exports = (app) => {


//Survey
app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

//Default Home
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  }); 


};