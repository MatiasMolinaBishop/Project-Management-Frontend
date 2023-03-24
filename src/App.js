import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";

import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/HomePage";     // <== IMPORT

function App() {
  return (
    <div className="App">

      {/* Below: ADD <Navbar>, <Routes> & <Route> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:id" element={<EditProjectPage />} />
      </Routes>

    </div>
  );
}

export default App;