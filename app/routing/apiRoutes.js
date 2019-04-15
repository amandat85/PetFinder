//GET Route to /api/friends
//POST route to /api/friends

let pets = require("../data/pets.js")

module.exports = (app) => {
    app.get("/api/pets", (req, res) => {
        res.json(pets);
    })

    app.post("/api/pets", (req, res) => {
        console.log(req.body.scores);

        let user = req.body

        for(var i = 0; i < user.scores.length; i++){
            user.scores[i] = parseInt(user.scores[i]);
            console.log(user.scores[i])
        }
    })
}