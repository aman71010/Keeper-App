import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true}
});

const note = new mongoose.model("Notes", noteSchema);

export default note;