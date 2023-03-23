import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import ProjectListPage from "./pages/ProjectListPage";

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
      </Routes>

    </div>
  );
}

export default App;