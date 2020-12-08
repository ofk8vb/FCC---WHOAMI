import express from "express";
import { json } from "body-parser";
import {WhoAmIRouter} from './routes/whoami';

var cors = require("cors");
const app = express();

app.use(WhoAmIRouter);
app.set('trust proxy',true); 
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(json());

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



export { app };