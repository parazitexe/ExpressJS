import express from "express";
//import Fs from "fs";
import path from "path";
import {requestTime,logger} from "./middleware.js"

const app = express();
const __dirname = path.resolve();

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`started has been on port ${port}...`);
});


app.use(requestTime);
app.use(logger);
app.use(express.static(path.resolve(__dirname, 'static')))


/*app.get("/load", (req, res)=>{
    res.download(path.resolve(__dirname, 'static','filin.html'));
})*/
