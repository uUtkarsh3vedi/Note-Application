import React from 'react'
import { useNote } from '../context/NoteContext';

const MyNotes = () => {
    const {myNotes} = useNote();
  return (
    <div>
      <h3>My Notes</h3>
      {myNotes.map((note) => (
        <div key={note._id}>
          <h4>{note?.title}</h4>
          <p>{note?.content}</p>
        </div>
      ))}
    </div>
      );
};

export default MyNotes