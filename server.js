//DEFINE VARIABLES==========================================
//Require express and path
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
let app = express();




var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require modules
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});
