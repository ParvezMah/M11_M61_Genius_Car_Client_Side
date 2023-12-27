import { GrLinkNext } from "react-icons/gr";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
    const {_id, title, img, price} = service;
return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="">
            <img src={img} alt="Shoes" className="h-[308px] w-full" />
        </figure>
        <div className="flex justify-between p-10 text-center">
            <div className="text-left space-y-2">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <p className="text-2xl text-[#FF3811] font-bold">Price : ${price}</p>
            </div>
            {/* <div className="card-actions items-end">
                <Link to={`/checkout/${_id}`}>
                    <GrLinkNext className="text-3xl text-[#FF3811]" />   
                </Link>
            </div> */}
            <div className="card-actions items-end">
                <Link to={`/book/${_id}`}>
                    <GrLinkNext className="text-3xl text-[#FF3811]" />   
                </Link>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service : PropTypes.object
}