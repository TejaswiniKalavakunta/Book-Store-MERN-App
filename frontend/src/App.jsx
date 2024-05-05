import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateJournals from "./pages/CreateJournals";
import ShowJournal from "./pages/ShowJournal";
import EditJournal from "./pages/EditJournal";
import DeleteJournal from "./pages/DeleteJournal";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/journals/create" element={<CreateJournals />} />
        <Route path="/journals/details/:id" element={<ShowJournal />} />
        <Route path="/journals/edit/:id" element={<EditJournal />} />
        <Route path="/journals/delete/:id" element={<DeleteJournal />} />
      </Routes>
    </div>
  );
};

export default App;
