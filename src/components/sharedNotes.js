import { useNote } from '../context/NoteContext'

const SharedNotes = () => {
    const {sharedNotes} = useNote();

  return (
    <div>
      <h3>Notes Shared With Me</h3>
      {sharedNotes.map((note) => (
        <div key={note._id}>
          <h4>{note.title}</h4>
          <p>{note.content}</p>
        </div>
      ))}
    </div>  
    );
};

export default SharedNotes