import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/Authprovider";
import BookedRoomTable from "./BookedRoomTable";


const MyBookings = () => {
    const [myBookeRoom, setMyBookeRoom] = useState(null)
    const { user } = useContext(authContext)
    useEffect(() => {
        fetch(`https://backend-server-seven.vercel.app/mybooking/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyBookeRoom(data))
    }, [user.email])

    


    return (
        <div>
            {
                myBookeRoom?.length > 0 ? 
                <div className="overflow-x-auto max-w-6xl mx-auto my-4">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#34402d] text-white">
                        <tr >
                            <th>
                               
                            </th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Update Date</th>
                            <th>Give a Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBookeRoom?.map((room, index)=> <BookedRoomTable 
                                                                key={index}
                                                                room={room}
                                                                myBookeRoom={myBookeRoom}
                                                                setMyBookeRoom={setMyBookeRoom}
                                                                ></BookedRoomTable>)
                        }
                        
                    </tbody>
                

                </table>
            </div> 
            : 
            <h1 className="text-xl md:text-3xl lg:text-5xl font-black text-red-600 text-center py-10">You do not have any Booking</h1>
            }
        </div>
    );
};

export default MyBookings;