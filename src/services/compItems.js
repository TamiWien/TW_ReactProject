import axios from "axios"

const getAllItems = async () =>{
    try {
        const res = await axios.get('/data.json')
        return res.data.items
    } catch (error) {
        throw error;
    }
}

export default getAllItems