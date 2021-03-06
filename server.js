//DEFINE VARIABLES==========================================
//Require express
const express = require("express");
let app = express();

//SET PORT=================================================
let port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use("/static", express.static(__dirname + "/app/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require modules
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});
