import axios from "axios"

const getAllProducts = async () =>{
    try {
        const res = await axios.get('/data.json')
        return res.data.products
    } catch (error) {
        throw error;
    }
}

export default getAllProducts