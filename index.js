import express from "express";
//import Fs from "fs";
import path from "path";
import {requestTime,logger} from "./middleware.js"

import serverRoutes from "./routes/servers.js"

const app = express();
const __dirname = path.resolve();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')

app.listen(port, ()=>{
    console.log(`started has been on port ${port}...`);
});

app.get("/", (req, res)=>{
    //res.render("filin")
    //res.send("filin")
    res.render("index", {title: "My index", active:"main"});
})
app.get("/filin", (req, res)=>{
    //res.render("filin")
    //res.send("filin")
    res.render("index", {title: "My filin", active:"filin"});
})
app.get("/vasia", (req, res)=>{
    //res.render("filin")
    //res.send("filin")
    res.render("index", {title: "My vasiliy", active:"vasia"});
})

app.use(requestTime);
app.use(logger);
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(serverRoutes);

