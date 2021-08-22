import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getNotes, deleteNote } from "../../service/api.js";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import "./allNotes.css";

function AllNotes(){ 
    
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        getAllNotes();
    }, []);

    const deleteNoteData = async (id) => {
        await deleteNote(id);
        getAllNotes();
    };

    const getAllNotes = async () => {
        let response = await getNotes();
        // console.log(response);
        setNotes(response.data);
    };

    return (
        <div className="all-note">
        { notes.map((note) => (
            <div className="note">
                <h1>{note.title}</h1>
                <p>{note.content}</p>
                <button onClick={() => deleteNoteData(note._id)}>
                    <DeleteIcon />
                </button>
                <button>
                    <Link style={{color: "#f5ba13"}} to={`/edit/${note._id}`}> <EditIcon /> </Link>
                </button>
            </div>
        ))}
        </div>
    );
}

export default AllNotes;