//GET Route to /api/friends
//POST route to /api/friends
console.log("API Routes successfully connected")

let dogs = require("../data/dogs.js")
let users = require("../data/users.js")

module.exports = (app) => {
    app.get("/api/dogs", (req, res) => {
        res.json(dogs);
    });

    app.get("/api/users", (req, res) => {
        res.json(users);
    });

    app.post("/api/users", (req, res)=>{
        let user = req.body.scores;
        let matchName = "";
        let matchPic = "";
        let difference = 50;
        
        for (let i = 0; i < dogs.length; i++) {
            var tempDiff = 0;
            
            for (let j = 0; j < user.length; j++) {
                tempDiff += Math.abs(dogs[i].scores[j] - user[j]);
            }
            
            if(tempDiff < difference){
                difference = tempDiff;
                matchName = dogs[i].name;
                matchPic = dogs[i].photo;
            }
        }
        
        users.push(req.body);
        
        res.json({ status: 'OK', name: matchName, photo: matchPic });
    })
};