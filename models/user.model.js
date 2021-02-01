var mongoose=require("mongoose");

function getUserModel()
{
    var UserSchemaObj=new mongoose.Schema({
        uid : {type:String,index:true,unique:true},// unique
        pwd : String,
        mob: String,
        dos: {type:Date,default:Date.now }
});

var userModel=mongoose.model("projectusers",UserSchemaObj);
return userModel;
}
module.exports=getUserModel;