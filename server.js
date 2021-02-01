const port = process.env.PORT || 3005;
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var app = express();
var path = require("path");
var session = require("express-session");
app.use(express.static("public"));

app.use(bodyparser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "react-main", "build")));
    app.get("*", (req, resp) => {
        resp.sendFile(path.join(__dirname, "react-main", "build", "index.html"));
    })
}
app.use(session({
    secret: 'real-java',
    // Forces the session to be saved 
    // back to the session store 
    resave: true,
    // Forces a session that is "uninitialized" 
    // to be saved to the store 
    saveUninitialized: true
}));

const db = require("./config/dbconfig");
//--------------------------------------------------------------
var dbConfig = db.dburl;
mongoose.connect(dbConfig).then(() => {
    console.log("Connected");
}).catch((err) => {
    console.log(err);
})
//---------------------------------------------------------------
var reactRouter = require("./Routers/rout-react");
app.use("/api/react", reactRouter);
var reactRouter = require("./Routers/rout-profile");
app.use("/api/profile", reactRouter);
var postmedRouter = require("./Routers/rout-postmed");
app.use("/api/postmed", postmedRouter);

app.listen(3005, () => {
    console.log("HEARD...");
})