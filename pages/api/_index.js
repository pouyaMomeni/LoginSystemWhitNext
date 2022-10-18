import axios from "axios"

const getAllProducts = async () => {
    // const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    return data
}
const getAllusers = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`
    const res = await fetch(url)
    return res
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
    login,
    getAllusers
}