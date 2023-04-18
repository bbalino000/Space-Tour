import axios from "axios";

const getLaunches = async () => {
    const response = await axios.get('http://localhost:8001/launches');

    return response.data;
}

const getLaunchpads = async () => {
    const response = await axios.get('http://localhost:8001/launchpads');
    
    return response.data;
}

const api = {getLaunches, getLaunchpads};
export default api;