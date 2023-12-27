// import { useEffect } from "react";
// import { useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../Hooks/useServices";

const Services = () => {
    const services = useServices();
    // const [services, setServices] = useState([]);

    // useEffect(()=>{
    //     fetch('https://module-58-genius-car-server-side.vercel.app/services')
    //         .then(res=> res.json())
    //         .then(data => {
    //             setServices(data)
    //         })
    // },[])

    return (
        <div className="mt-4">
            <div className="text-center">
            <h3 className="text-3xl font-bold text-orange-400">Our Services</h3>
            <h3 className="text-5xl font-bold">Our Service Area</h3>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Services;