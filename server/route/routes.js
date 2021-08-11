import express from "express";
import { getNotes, addNote, getNoteById ,editNote, deleteNote } from "../controller/notes_controller.js";

const route = express.Router();

route.get("/", getNotes);
route.post("/add", addNote);
route.get("/:id", getNoteById);
route.put("/:id", editNote);
route.delete("/:id", deleteNote);

export default route;