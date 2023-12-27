import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";
import BookingsRow from "./BookingsRow";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();
    // console.log('Bookings : ', bookings);

    // const url = `https://module-58-genius-car-server-side.vercel.app/bookings?email=parvezmahmudaa100@gmail.com&sort=1`
    const url = `/bookings?email=${user?.email}`;


    // By Fetch
    useEffect(()=>{
        axiosSecure.get(url)
        .then(res => setBookings(res.data))
    },[axiosSecure, url])


    // By Axios
    // useEffect(()=>{
    //     if(user.email){
    //         axios.get(url, {withCredentials:true})
    //         .then(res=>{
    //             setBookings(res.data);
    //         })
    //     }
    // },[url,user])

console.log({bookings});

    const handleDelete = (id)=>{
        const proceed = confirm('Are you sure that you want to Delete?');
        if(proceed){
            console.log('You have Deleted');

            fetch(`https://module-58-genius-car-server-side.vercel.app/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('You have Deleted Successfully!');
                    // Baki Ja ace Tader ke UI te pathate hobe.
                    const remaining = bookings.filter(booking => booking._id !==id)
                    setBookings(remaining);
                }
            })
        }
    }


    const handleBookingConfirm = (id)=>{
        fetch(`https://module-58-genius-car-server-side.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({status : 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // Update State
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings);
            }
        })
    }


    return (
        <div>
            <h3 className="text-3xl text-center font-bold my-10">Your Bookings : {bookings.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-base-200">
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>customerName</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <BookingsRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleBookingConfirm={handleBookingConfirm}
                            >
                            </BookingsRow>)
                        }
                    </tbody>
                 </table>
            </div>
        </div>
    );
};

export default Bookings;