import axios from "axios";

const notesUrl = "http://localhost:3000/notes";

export const getNotes = async (id) => {
    id = id || "";
    await axios.get(`${notesUrl}/${id}`);
}

export const addNote = async (note) => {
    await axios.post(`${notesUrl}/add`, note);
}

export const deleteNote = async (id) => {
    await axios.put(`${notesUrl}/${id}`);
}

export const editNote = async (id, note) => {
    await axios.delete(`${notesUrl}/${id}`, note);
}

