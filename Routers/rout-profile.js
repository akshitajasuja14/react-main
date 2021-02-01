var express=require("express");
var path=require("path");

app=express.Router();
var profileController=require(path.join(__dirname,"..","controllers","profile.controller.js"));



app.post("/add-profile",profileController.addUser);
app.post("/update-profile",profileController.updateUser);
app.post("/fetch-profile",profileController.fetchUser);


module.exports=app;
