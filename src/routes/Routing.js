// routes/Routing.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNoteForm from "../components/createNoteForm";
import MyNotes from "../components/myNotes";
import ShareNoteForm from "../components/sharedNoteForm";
import SharedNotes from "../components/sharedNotes";
import RegisterForm from "../components/registerForm";
import DashboardLayout from "../components/DashboardLayout";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
  
        
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="create" element={<CreateNoteForm />} />
          <Route path="my-notes" element={<MyNotes />} />
          <Route path="share" element={<ShareNoteForm />} />
          <Route path="shared" element={<SharedNotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
