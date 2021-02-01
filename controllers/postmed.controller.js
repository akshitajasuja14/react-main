var path = require("path");
var fileupload = require("express-fileupload");
app.use(fileupload());
//Getting Model
var pModel = require(path.join(__dirname, "..", "models", "postmed.model.js"));
var postmedModel = pModel();
//----------------------ADDING PROFILE-----------------
async function addMed(req, resp) {
    console.log(JSON.stringify(req.body));
    console.log("*********");
    console.log(req.files);
    console.log("*********");

    if (req.files == null)
        req.body.medpic = "nopic.jpg";
    else {
        req.body.medpic = req.files.medpic.name;

        var fullPath = path.join(__dirname, "..", "uploads", req.body.medpic);
        //----------------------------------------------

        await req.files.medpic.mv(fullPath, (err) => {
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

    await postmedModel.create(req.body, (err, result) => {
        if (err) {
            resp.send(err);
            return;
        }
        resp.set("json");
        resp.json("Posted");
        console.log(result);
    });


}
async function fetchMed(req, resp) {
    // console.log("777777777777777777");
    console.log(req.body.uid);
    // console.log("000000000000000");
    await postmedModel.find({ uid: req.body.uid })
        .then((result) => {
            console.log(result.length + " Records Found");
            //  console.log(result);
            resp.json(result);
        })
        .catch((err) => {
            resp.json({ errmsg: err });
        })
}
// async function delMed(req, resp) {
//     console.log("99999");
//     console.log(req.body._id);
//     postmedModel.remove({ _id: req.body._id }).then((result) => {
//         console.log(result);
//         if (result.deletedCount != 0)
//             resp.json({ msg: "Deleted" });
//         else
//             resp.json({ msg: "Invalid id" });
//     });
// }
async function dodel(req, resp) {
    console.log(req.body.uid);
    console.log(req.body.medname);
    await postmedModel.remove({ uid: req.params.uid, medname: req.params.medname }).then((result) => {
        console.log(result);
        if (result.deletedCount != 0)
            resp.json({ msg: "Deleted" });
        else
            resp.json({ msg: "Invalid id/fn" });
    });
}
async function fetchDistCity(req, resp) {
    // console.log("111111111111111");
    postmedModel.distinct("city").then((result) => {

        console.log(result);
        resp.set("json");
        resp.json(result);
    });
}
async function doFetchMedicine(req, resp) {
    var cityy = req.params.city;
    postmedModel.distinct("medname", { city: cityy })
        .then((result) => {
            console.log(result.length);
            resp.json(result);
        })
        .catch((err) => {
            resp.json({ errmsg: err });
        })
}
async function doFetchProvider(req, resp) {
    console.log(req.params.city);
    console.log(req.params.medicine);
    postmedModel.find({ city: req.params.city, medicine: req.params.medname })
        .then((result) => {
            console.log(result.length);
            resp.json(result);
        })
        .catch((err) => {
            resp.json({ errmsg: err });
        })
}



module.exports = { addMed, fetchMed, fetchDistCity, doFetchMedicine, doFetchProvider, dodel }