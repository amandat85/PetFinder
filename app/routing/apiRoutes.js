//GET Route to /api/friends
//POST route to /api/friends

let pets = require("../data/users.js")

module.exports = (app) => {
    app.get("/api/pets", (req, res) => {
        res.json(pets);
    })

    // app.post("/api/users", (req, res) => {
    //     users.push(req.body);
    // })
}