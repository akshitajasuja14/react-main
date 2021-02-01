var express=require("express");
var path=require("path");

app=express.Router();
var userController=require(path.join(__dirname,"..","controllers","user.controller.js"));



app.post("/signup",userController.createUser);
app.post("/login",userController.loginUser);
//---------------------delete---------------------------
// app.post("/delete",(req,resp)=>{
//     userModel.remove({fn:req.body.fn}).then((result)=>
//     {
//         console.log(result);
//         if(result.deletedCount!=0)
//         resp.json({msg:"Deleted"});
//         else
//         resp.json({msg:"Invalid id/fn"});
//     });
// })
// //--------------------update---------------------------------
// app.post("/update-post",(req,resp)=>{
//     userModel.update({fn:req.body.fn},{$set:{ln:req.body.ln,mobile:req.body.mobile}}).then(function(result)
//     {
//         console.log(result);
//               if(result.nModified!=0)
//                 resp.json({msg:"Updated"});
//                else
//                resp.json({msg:"Invalid id"});
        
//     });
//     //To change all the fields coming from client
//     /*
//     userModel.update({uid:req.body.uid},{$set:req.body}).then(function(result){
//         resp.send(result);
//         console.log(result);
//     });
//     */
// })
// //---------------fetch-all--------------------------------------

// app.post("/fetchall",(req,resp)=>{
//     userModel.find()
//     .then((result)=>{
//         resp.json(result);
//     })
//     .catch((err)=>{
//         resp.json({errmsg:err});
//     })
// })
// //-----------------fetch--------------------------------------------
// app.post("/fetch",(req,resp)=>{
//     userModel.find({fn:req.body.fn})
//     .then((result)=>{
//         console.log(result.length+" Records Found");
//         console.log(result);
//         resp.json(result);
//     })
//     .catch((err)=>{
//         resp.json({errmsg:err});
//     })
// })

module.exports=app;
