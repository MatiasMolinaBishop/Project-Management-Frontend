import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"
import AddTask from "../components/AddTask";

 
function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);

  //onst APIurl = 'http://localhost:5005/api/projects'
  //useParams is a hook that comes with eact router that allows us to acess the query.parfams from the url

  const  projectId  = useParams();  

  const fetchProject = async() => {

    console.log(projectId) //====== >  {id: '641c3570eecb9794f8e7ae4a'} it retunrs the req.params as an object. So we must access its value with the key of id

    try{
        const response = await axios.get(`http://localhost:5005/api/projects/${projectId.id}`)
        console.log(response)
        setProject(response.data)

    }catch(err){
        console.log(err)
    }
  }

   useEffect(() => {
     fetchProject()
   }, [])
 
  
  return (
    <div className="ProjectDetails">
        {/* Conditionally reder if porject exists */}
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
            <Link to={`/projects/edit/${project._id}`}>
                <h3>EDIT PROJECT</h3>
            </Link>
        </>
      )}
      {/* We pass the fetch function as props so that when we create a new tasks we can call the fetch function and dybamically re render tasks */}
    <AddTask fetchProject={fetchProject} id={projectId.id}/>

      {/* Same if project exists we will map over all its tasks to display them */}
    {project &&
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
      ))}
 
      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
    </div>
  );
}
 
export default ProjectDetailsPage;