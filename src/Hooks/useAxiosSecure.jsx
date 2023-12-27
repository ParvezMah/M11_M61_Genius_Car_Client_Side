import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

// so that i can copy that code instea writing 50 times
const axiosSecure = axios.create({
    baseURL: 'https://module-58-genius-car-server-side.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        },error => {
            console.log('error tracked in the interceptor ', error.response)
            // if(error.response.status === 401 || error.response.status === 403)
            // {
            //     console.log('logout the user');
            //     logOut()
            //     .then(()=>{
            //         navigate('/login')
            //     })
            //     .catch(error=> console.log(error))
            // }
        })
    },[logOut, navigate])
    return axiosSecure;
};

export default useAxiosSecure;