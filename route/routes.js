import express from "express";
import { getNotes } from "../controller/user controller.js";

const route = express.Router();

route.get("/", getNotes);

export default route;