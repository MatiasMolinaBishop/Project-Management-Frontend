import { useState } from "react";
import axios from "axios";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  
  const handleSubmit = async(e) => {

    console.log('submitting works')

    e.preventDefault()
    let projectId = props.id
    const requestBody = { title, description, projectId };

     // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    try{
        await axios.post(` http://localhost:5005/api/tasks`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
        console.log('TASK  CREATED')
        props.fetchProject()

    }catch(err){
        console.log(err)
    }
  };

  
  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      
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

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
