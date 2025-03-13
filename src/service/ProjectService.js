import axios from "axios";

export const addProject = async (data) => {
    try {
        const res = await axios.post('http://localhost:8080/project/create', {...data});
        if (res.data && res.status === 200) {
            console.log("Project added successfully !");
        }
    } catch (error) {
        console.log({error});
    }
}