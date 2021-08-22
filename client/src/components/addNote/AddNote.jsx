import React, { useState } from "react";
import { useHistory } from "react-router";
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";
import { addNote } from "../../service/api.js";
import AddIcon from "@material-ui/icons/Add";

function AddNote() {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  let history = useHistory();

  const submitNote = async () => {
    await addNote(note);
    history.push("./all");
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div style={{ marginTop: "100px"}}>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNote;
