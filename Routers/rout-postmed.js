var express = require("express");
var path = require("path");

app = express.Router();
var postmedController = require(path.join(__dirname, "..", "controllers", "postmed.controller.js"));



app.post("/post-med", postmedController.addMed);
app.post("/manage-med", postmedController.fetchMed);
//app.post("/delete-med/:_id", postmedController.delMed);
app.post("/del-med/:uid/:medname", postmedController.dodel);
app.post("/fetch-city", postmedController.fetchDistCity);
app.post("/fetch-medicine/:city", postmedController.doFetchMedicine);
app.post("/fetch-provider/:city/:medicine", postmedController.doFetchProvider);



module.exports = app;
