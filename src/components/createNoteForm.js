// CreateNoteForm.js
import React, { useState } from "react";
import { useNote } from "../context/NoteContext";
import "../styles/CreateNoteForm.css";

const CreateNoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { handleCreateNote, userId } = useNote();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateNote({ title, content, ownerId: userId });
    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h3>Create Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="note-input"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="note-textarea"
      />
      <button type="submit" className="note-button">
        Create
      </button>
    </form>
  );
};

export default CreateNoteForm;
