import Note from "../model/note_schema.js";

export const getNotes = async (req, res) => {
    try{
        const notes = await Note.find();
        res.json(notes);
    }catch(error){
        res.json({message: error.message });
    }
};

export const addNote = async (req, res) => {
    const note = req.body;
    const newNote = new Note(note);
    try{
        await newNote.save();
        res.json(newNote);
    }catch(error){
        res.json({message: error.message });
    }
};

export const getNoteById = async (req, res,) => {
    try{
        const note  = await Note.findById(req.params.id);
        res.json(note);
    }catch(error){
        res.json({message: error.message });
    }
}

export const editNote = async (req, res,) => {
    let note = await Note.findById(req.params.id);
    note = req.body;
    try{
        await Note.updateOne({_id: req.params.id}, {$set: {title: req.body.title, content: req.body.content}});
        res.json("Note updated successfully");
    }catch(error){
        res.json({message: error.message });
    }
}

export const deleteNote = async (req, res,) => {
    try{
        await Note.deleteOne({_id: req.params.id});
        res.json("Note deleted successfully");
    }catch(error){
        res.json({message: error.message });
    }
}