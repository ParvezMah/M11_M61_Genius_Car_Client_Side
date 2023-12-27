import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServeces] = useState([]);
    useEffect(()=>{
        fetch('https://module-58-genius-car-server-side.vercel.app/services')
            .then(res => res.json())
            .then(data => setServeces(data))
    },[])
    return services;
};

export default useServices;