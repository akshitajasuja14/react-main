var mongoose = require("mongoose");

function getProfileModel() {
    var ProfileSchemaObj = new mongoose.Schema({
        uid: { type: String, index: true, unique: true },// unique
        name: String,
        mob: String,
        address: String,
        city: String,
        idpic: String

    });

    var profileModel = mongoose.model("projectprofiles", ProfileSchemaObj);
    return profileModel;
}
module.exports = getProfileModel;