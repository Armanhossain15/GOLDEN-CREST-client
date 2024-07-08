import Swal from 'sweetalert2'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UpdateDate from './UpdateDate';
// import Modal from '../RoomDetails/Modal';



const BookedRoomTable = ({ room, setMyBookeRoom, myBookeRoom }) => {



    const handleDeleteBooking = id => {
        console.log(room.room_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://backend-server-seven.vercel.app/deletebooking/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => {
                        const remaining = myBookeRoom.filter(room => room._id !== id)
                        setMyBookeRoom(remaining)

                        fetch(`https://backend-server-seven.vercel.app/rooms/${room.room_id}`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ availability: 'Available' })
                        })
                            .then(res => res.json())
                            .then(data => console.log(data))
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    const handleUpdateDate = () => {
        document.getElementById(room._id).showModal()
    }
    console.log(room);
    return (
        <tr className="border-2 ">
            <th>
                <label>
                    <button onClick={() => handleDeleteBooking(room._id)}
                        className="btn btn-circle btn-outline btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-2">
                    <div className="avatar">
                        {/* <div className="mask mask-squircle w-12 h-12">
                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div> */}
                    </div>
                    <div>
                        <div className="font-bold">{room.room_name}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost ">{room.booking_date}</span>
            </td>
            <td>
                <button onClick={handleUpdateDate}
                    className="btn btn-sm border-2 border-[#34402d] hover:bg-[#34402d] hover:text-white">Update Date</button>
                <UpdateDate
                id={room._id}
                ></UpdateDate>
            </td>

            <td>
                <Link to={`/giveReview/${room._id}`}>
                    <button
                        className="btn btn-sm border-2 border-[#34402d] hover:bg-[#34402d] hover:text-white">Give Review</button>
                </Link>
            </td>
        </tr>
    );
};
BookedRoomTable.propTypes = {
    room: PropTypes.object,
    setMyBookeRoom: PropTypes.node,
    myBookeRoom: PropTypes.node,

}
export default BookedRoomTable;