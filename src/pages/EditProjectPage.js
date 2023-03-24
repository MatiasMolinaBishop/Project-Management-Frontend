import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProjectPage(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const projectId = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        const fetchProject = async () => {

            console.log(projectId) //====== >  {id: '641c3570eecb9794f8e7ae4a'} it retunrs the req.params as an object. So we must access its value with the key of id

            try {
                const response = await axios.get(`http://localhost:5005/api/projects/${projectId.id}`)
                console.log(response)
                setTitle(response.data.title)
                setDescription(response.data.description)

            } catch (err) {
                console.log(err)
            }
        }

        fetchProject()

    }, [projectId])



    const handleFormSubmit = async (e) => {

        e.preventDefault()
        const requestBody = { title, description };
        console.log(requestBody)

        try {
            await axios.put(`http://localhost:5005/api/projects/${projectId.id}`, requestBody)
            console.log('project updated')
            navigate(`/projects/${projectId.id}`)

        } catch (err) {
            console.log(err)
        }
    }

    const deleteProject = async (e) => {
        e.preventDefault()

        try {
            await axios.delete(`http://localhost:5005/api/projects/${projectId.id}`)
            console.log('PROJECT DELETED')
            navigate(`/projects`)

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div className="EditProjectPage">
            <h3>Edit the Project</h3>
            <form onClick={deleteProject}>
                <button type='submit'>DELETE</button>
            </form>

            <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Description:</label>
                <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default EditProjectPage;
