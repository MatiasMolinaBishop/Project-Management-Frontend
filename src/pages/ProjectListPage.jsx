import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import AddProject from "../components/AddProject";


const ProjectListPage = () => {
    const [projects, setProjects] = useState([])

    const APIurl = 'http://localhost:5005/api/projects'

    const fetchProjects = async() => {
        const storedToken = localStorage.getItem("authToken");

        try{
            const response = await axios.get(APIurl, { headers: { Authorization: `Bearer ${storedToken}` } })
            console.log(response.data[0].title)
            setProjects(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return(
    <div>
            <div className="ProjectListPage">
                {/* Now we only fetch the projects list when the component mounts. Since the form to create a new project is within */}
                {/* We pass the fetch function as props so we can invoque from the form component after it creates a project */}
                {/* This will then update the list of projects that is being renderde automatically after submitting the form */}
            <AddProject fetchProjects={fetchProjects} />
      
            {projects.map((project) => {
                return (
                    <div className="ProjectCard card" key={project._id} >
                        <Link to={`/projects/${project._id}`}>
                            <h3>{project.title}</h3>
                        </Link>
                    </div>
                );
            })}     
     
        </div>
    </div>
    )
}

export default ProjectListPage