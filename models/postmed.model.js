var mongoose = require("mongoose");

function getPostmedModel() {
    var PostmedSchemaObj = new mongoose.Schema({
        uid: String,
        medname: String,
        comp: String,
        expdate: Date,
        qty: String,
        units: String,
        city: String,
        medpic: String

    });

    var postmedModel = mongoose.model("projectpostmeds", PostmedSchemaObj);
    return postmedModel;
}
module.exports = getPostmedModel;