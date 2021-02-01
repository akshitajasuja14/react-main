var path = require("path");
var fileupload = require("express-fileupload");
app.use(fileupload());
//Getting Model
var pModel = require(path.join(__dirname, "..", "models", "profile.model.js"));
var profileModel = pModel();
//----------------------ADDING PROFILE-----------------
async function addUser(req, resp) {
    console.log(JSON.stringify(req.body));
    console.log("*********");
    console.log(req.files);
    console.log("*********");

    if (req.files == null)
        req.body.ppic = "nopic.jpg";
    else {
        req.body.idpic = req.files.idpic.name;

        var fullPath = path.join(__dirname, "..", "uploads", req.body.idpic);
        //----------------------------------------------

        await req.files.idpic.mv(fullPath, (err) => {
            if (err) {
                console.log(err.message);
                //return resp.status(500).send(err);
            }
            else {
                console.log("File moved...");
                //resp.json({msg:"File Uploaded"});
                //resp.end("File Uploaded successfully for User:"+req.body.uid+"  Filename="+req.body.picname);
            }
        })
    }

    await profileModel.create(req.body, (err, result) => {
        if (err) {
            resp.send(err);
            return;
        }
        resp.set("json");
        resp.json("Profile Added");
        console.log(result);
    });
}
async function fetchUser(req, resp) {
    // console.log(req.body.uid);
    // console.log("333333333333333333333333");
    profileModel.find({ uid: req.body.uid })
        // console.log(uid)
        .then((result) => {
            console.log(result.length + " Records Found");
            console.log(result);
            resp.json(result);
        })
        .catch((err) => {
            resp.json({ errmsg: err });
        })
}
// async function fetchCity(req,resp){
//     profileModel.findOne
// } 

async function updateUser(req, resp) {
    //     profileModel.update({uid:req.body.uid},{$set:{pwd:req.body.pwd,mobile:req.body.mobile}}).then(function(result)
    // {
    //     console.log(result);
    //           if(result.nModified!=0)
    //             resp.json({msg:"Updated"});
    //            else
    //            resp.json({msg:"Invalid id"});

    // });
    //To change all the fields coming from client

    await profileModel.update({ uid: req.body.uid }, { $set: req.body }).then(function (result) {
        //resp.send(result);
        console.log(result);
        if (result.nModified != 0) {
            resp.set("json");
            resp.json("Profile Updated successfully");
        }
        else
            resp.json("Invalid id");
    });


}



module.exports = { addUser, updateUser, fetchUser }