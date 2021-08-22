import express from "express";
import { getNotes, addNote, getNoteById ,editNote, deleteNote } from "../controller/notes_controller.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/add", addNote);
router.get("/:id", getNoteById);
router.put("/:id", editNote);
router.delete("/:id", deleteNote);

export default router;