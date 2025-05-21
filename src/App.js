import logo from "./logo.svg";
import "./App.css";
import Routing from "./routes/Routing";
import { NoteProvider } from "./context/NoteContext";

function App() {
  return (
    <>
      <NoteProvider>
        <Routing />
      </NoteProvider>
    </>
  );
}

export default App;
