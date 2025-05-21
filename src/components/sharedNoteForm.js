import React, { useState } from "react";
import { useNote } from "../context/NoteContext";
import "../styles/CreateNoteForm.css";
const ShareNoteForm = () => {
  const [noteId, setNoteId] = useState("");
  const [userIdToShare, setUserIdToShare] = useState("");
  const { handleShareNote } = useNote();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShareNote(noteId, userIdToShare);
    setNoteId("");
    setUserIdToShare("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h3>Share a Note</h3>
      <input
        type="text"
        placeholder="Note ID"
        value={noteId}
        onChange={(e) => setNoteId(e.target.value)}
        required
        className="note-input"
      />
      <input
        type="text"
        placeholder="User ID to share with"
        value={userIdToShare}
        onChange={(e) => setUserIdToShare(e.target.value)}
        required
        className="note-input"
      />
      <button type="submit" className="note-button">Share</button>
    </form>
  );
};

export default ShareNoteForm;
