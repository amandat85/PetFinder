//GET Route to /api/friends
//POST route to /api/friends
let dogs = require("../data/dogs.js")
let cats = require("../data/cats.js")
let usersDogs = require("../data/usersDogs.js")
let usersCats = require("../data/usersCats.js")

module.exports = (app) => {
    app.get("/api/dogs", (req, res) => {
        res.json(dogs);
    });

    app.get("/api/cats", (req, res) => {
        res.json(cats);
    });

    app.get("/api/usersDogs", (req, res) => {
        res.json(usersDogs);
    });

    app.get("/api/usersCats", (req, res) => {
        res.json(usersCats);
    });
    //DOG SURVEY=============================================
    app.post("/api/usersDogs", (req, res) => {
        let user = req.body.scores;
        let matchName = "";
        let matchPic = "";
        let difference = 50;

        for (let i = 0; i < dogs.length; i++) {
            var tempDiff = 0;

            for (let j = 0; j < user.length; j++) {
                tempDiff += Math.abs(dogs[i].scores[j] - user[j]);
            }

            if (tempDiff < difference) {
                difference = tempDiff;
                matchName = dogs[i].name;
                matchPic = dogs[i].photo;
            }
        }
        usersDogs.push(req.body);

        res.json({ status: 'OK', name: matchName, photo: matchPic });
    });
    //CAT SURVEY===============================================    
    app.post("/api/usersCats", (req, res) => {
        let userData = req.body.scores;
        let matchName = "";
        let matchPic = "";
        let difference = 50;

        for (let i = 0; i < cats.length; i++) {
            var tempDiff = 0;

            for (let j = 0; j < userData.length; j++) {
                tempDiff += Math.abs(cats[i].scores[j] - userData[j]);
            }

            if (tempDiff < difference) {
                difference = tempDiff;
                matchName = cats[i].name;
                matchPic = cats[i].photo;
            }
        }
        userData.push(req.body);

        res.json({ status: 'OK', name: matchName, photo: matchPic });
    });
};