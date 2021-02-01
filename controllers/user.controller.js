var path = require("path");
var express = require("express");
var session = require("express-session");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//Getting Model
var uModel = require(path.join(__dirname, "..", "models", "user.model.js"));
var userModel = uModel();
//----------------------signup-----------------
async function createUser(req, resp) {

    await userModel.create(req.body, (err, result) => {
        if (err) {
            resp.send(err);
            return;
        }
        resp.set("json");
        console.log(result.uid);
        resp.json("Signed up successfully");
        console.log(result);
    });
}
//---------------------login-----------------------
async function loginUser(req, res) {
    console.log(req.body.uid);
    await userModel.findOne({ uid: req.body.uid }, (err, foundUser) => {
        if (err) {
            console.log(err);
            res.send("checkk");
        }
        else if (foundUser) {
            console.log(foundUser.uid)
            {
                if (foundUser.pwd == req.body.pwd) {
                    console.log("logged in");
                    var uid = req.body.uid;
                    req.session.activeuser = uid;
                    console.log(req.session.activeuser);
                    res.send("Logged in successfully with userid" + " " + req.session.activeuser);
                    // res.redirect("/src/Components/UserDashboard.jsx");
                }
                else {
                    console.log("invalid");
                    res.send("invalid userid");
                    return;

                }

            }



        }
    })

}


module.exports = { createUser, loginUser }