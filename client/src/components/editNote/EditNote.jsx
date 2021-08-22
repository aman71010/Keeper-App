import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";
import { getNotes, editNote } from "../../service/api.js";
import "./editNote.css";

function EditNote() {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    loadNoteDetails();
  }, []);

  const loadNoteDetails = async () => {
    const response = await getNotes(id);
    //console.log(response.data);
    setNote(response.data);
  }
  
  const editNoteDetails = async () => {
    await editNote(id, note);
    history.push("/all")
  }

  return (
    <div className="note-top">
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={3}
        />
        <Zoom in={true}>
          <Fab onClick={() => editNoteDetails()}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default EditNote;
