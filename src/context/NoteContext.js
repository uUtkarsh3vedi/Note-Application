import React, { createContext, useContext, useEffect, useState } from "react";
import {
  fetchMyNotes,
  fetchSharedNotes,
  createNote,
  shareNote,
} from "../api/noteApi";
import { useAuth } from "./AuthContext";

const NoteContext = createContext();

export const useNote = () => useContext(NoteContext);

export const NoteProvider = ({ children }) => {
  const { userId, token } = useAuth(); 


  const [myNotes, setMyNotes] = useState([]);
  const [sharedNotes, setSharedNotes] = useState([]);

  useEffect(() => {
    if (userId && token) {
      loadMyNotes();
      loadSharedNotes();
    }
  }, [userId, token]);

  const loadMyNotes = async () => {
    try {
      const data = await fetchMyNotes(userId);
      setMyNotes(data);
    } catch (err) {
      console.error("Failed to fetch my notes", err);
    }
  };

  const loadSharedNotes = async () => {
    try {
      const data = await fetchSharedNotes(userId);
      setSharedNotes(data);
    } catch (err) {
      console.error("Failed to fetch shared notes", err);
    }
  };

  const handleCreateNote = async (title, content) => {
    try {
      await createNote({ title, content, owner: userId }, token);
      loadMyNotes();
    } catch (err) {
      console.error("Failed to create note", err);
    }
  };

const handleShareNote = async (noteId, userIdToShare) => {
  try {
    await shareNote(noteId, userIdToShare, token);
    loadMyNotes();
  } catch (error) {
    console.error("Failed to share note", error);
  }
};

  return (
    <NoteContext.Provider
      value={{
        myNotes,
        sharedNotes,
        handleCreateNote,
        handleShareNote,
        reload: { loadMyNotes, loadSharedNotes },
        userId,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
