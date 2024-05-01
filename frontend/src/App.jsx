import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateJournals from "./pages/CreateJournals";
import ShowJournal from "./pages/ShowJournal";
import EditJournal from "./pages/EditJournal";
import DeleteJournal from "./pages/DeleteJournal";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journals/create" element={<CreateJournals />} />
      <Route path="/journals/details/:id" element={<ShowJournal />} />
      <Route path="/journals/edit/:id" element={<EditJournal />} />
      <Route path="/journals/delete/:id" element={<DeleteJournal />} />
    </Routes>
  );
};

export default App;
