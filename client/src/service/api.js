import axios from "axios";

//const notesUrl = "http://localhost:8080/notes";
const notesUrl = "https://mernkeeper-app.herokuapp.com/notes";

export const getNotes = async (id) => {
    id = id || "";
    return await axios.get(`${notesUrl}/${id}`);
}

export const addNote = async (note) => {
    return await axios.post(`${notesUrl}/add`, note);
}

export const deleteNote = async (id) => {
    return await axios.delete(`${notesUrl}/${id}`);
}

export const editNote = async (id, note) => {
    return await axios.put(`${notesUrl}/${id}`, note);
}

