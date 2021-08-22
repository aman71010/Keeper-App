import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./server/route/routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/notes", router);

const URL = process.env.ATLAS_URI;
const PORT = 8080;

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running successfully on Port ${PORT}`);
    });
}).catch((error)=>{
    console.log("ERROR: ", error.message);
})
