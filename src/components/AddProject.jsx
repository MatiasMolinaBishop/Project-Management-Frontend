import { useState } from "react";
import axios from "axios";
 
const APIurl = "http://localhost:5005/api/projects";
 
function AddProject({fetchProjects}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault()
    const body = {title, description}
    try{
        await axios.post(APIurl, body)
        setTitle("");
        setDescription("");
        fetchProjects();
    
    }catch(err){
        console.log(err)
    }
  }
 
  return (
    <div className="AddProject">
      <h3>Add Project</h3>
 
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
 
export default AddProject;