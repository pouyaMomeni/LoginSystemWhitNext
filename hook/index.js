import * as api from "/pages/api/_index"
import { useQuery, useMutation } from "react-query"



const useAllProducts = () => {
    return useQuery("products", api.getAllProducts)
}
const useSignIn = () => {
    const mutation = useMutation(api.signUP)
    return mutation
}
const useLogin = () => {
    const mutation = useMutation(api.login)
    return mutation
}

export {
    useAllProducts,
    useSignIn,
    useLogin
}