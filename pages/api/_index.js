import axios from "axios"

const getAllProducts = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    return data
}


const signUP = async (values) => {
    const { data } = await axios.post(`http://localhost:4000/register`, { username: values.username, email: values.email, password: values.password })
    return data
}

const login = async (values) => {
    const { data } = await axios.post(`http://localhost:4000/login`, { email: values.email, password: values.password })
    return data
}

export {
    getAllProducts,
    signUP,
    login
}