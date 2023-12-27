import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";

const BookService = () => {

    const service = useLoaderData();
    console.log('Service is : ', service);
    const {user} = useContext(AuthContext);
    const {_id, price, title, img } = service;


    const handleOrderBook = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.Name.value;
        // const email = user?.email;
        const email = form.email.value;
        const date = form.Date.value;
        const booking = {
            customerName : name, 
            email, 
            date, 
            service : title,
            service_id : _id, 
            price : price,
            img,
        }
        console.log('My booking is : ', booking);

        fetch('https://module-58-genius-car-server-side.vercel.app/bookings',{
            method: 'POST',
            headers : {
                'content-type':'application/json'
            },
            body : JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Your Service Booked Successfully!')
            }
        })
    }

    return (
        <div>
            <h3 className="text-3xl font-bold text-center my-10">Book Services Page : {title}</h3>
            <div>
                <div className=" py-5 bg-base-200">
                    <div className="p-10 flex-col mx-auto lg:flex-row-reverse">
                        <div className="card  shrink-0 w-full shadow-2xl bg-base-100">
                            <form onSubmit={handleOrderBook} className="p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Name</span>
                                    </label>
                                    <input type="text" name="Name" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Date</span>
                                    </label>
                                    <input type="date" name="Date" placeholder="Date" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Email</span>
                                    </label>
                                    <input type="eamil" name="email" defaultValue={user?.email} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Due Amount</span>
                                    </label>
                                    <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-block btn-warning text-white text-xl" type="submit" value="Order Confirm" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookService;