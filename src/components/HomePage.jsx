import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import CreateProject from "./Projects/CreateProject";
import UpdateProject from "./Projects/UpdateProject";
import ReadProject from "./Projects/ReadProject";
import DeleteProject from "./Projects/DeleteProject";
import Resources from "./Resources";
import WBS from "./WBS";
import Home from "./Home";

const HomePage = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/create" element={<CreateProject />} />
      <Route path="/projects/update" element={<UpdateProject />} />
      <Route path="/projects/read" element={<ReadProject />} />
      <Route path="/projects/delete" element={<DeleteProject />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/wbs" element={<WBS />} />
    </Routes>
  </Router>
);

export default HomePage;