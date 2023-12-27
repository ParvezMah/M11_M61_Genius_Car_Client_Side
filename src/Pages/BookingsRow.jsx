const BookingsRow = ({booking, handleDelete, handleBookingConfirm}) => {
    // console.log('booking : ', booking);
    const {_id, customerName, email, date, price, service, img, status} = booking;

    return (
            <tr>
                <th>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="rounded w-28 h-20">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                </td>
                <td>
                    {service}
                </td>
                <td>{customerName}</td>
                <td>{email}</td>
                <td>${price}</td>
                <td>{date}</td>
                <th>
                    {
                        status ? <span className="text-primary font-bold p-2 bg-blue-200 rounded-md">Confirmed</span>
                               : <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                    }
                </th>
            </tr>
    );
};

export default BookingsRow;