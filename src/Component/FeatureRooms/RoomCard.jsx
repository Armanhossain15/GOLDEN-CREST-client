import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/Authprovider";
import Modal from "../../Page/RoomDetails/Modal";
import PropTypes from 'prop-types';

const RoomCard = ({data}) => {
    const navigate = useNavigate()
    const { user } = useContext(authContext)
    const [roomAvailability, setRoomAvailability] = useState(data.availability)
    const handleBook = () => {
        if (user) {
            document.getElementById(data._id).showModal()
        }
        else {
            navigate('/login')
        }
    }
    return (
        <div >
            <div className="card  bg-base-100  space-y-3">
                <Link to={`/rooms/${data._id}`}>
                    <figure className="rounded-lg h-44"><img src={data.image} alt={data.name} /></figure>
                    
                </Link>
                <div className="space-y-2">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.description.slice(1, 60)}....</p>
                    <div className="card-actions ">
                        {
                            roomAvailability === 'Available' ?
                                <>
                                    <button onClick={handleBook}
                                        className="btn  btn-sm w-full border border-[#34402d] hover:bg-[#34402d] hover:text-white">Book Now</button>
                                        
                                    <Modal
                                        img={data.image}
                                        id={data._id}
                                        name={data.name}
                                        description={data.description}
                                        price={data.price_per_night}
                                        setRoomAvailability={setRoomAvailability}
                                    ></Modal>
                                </> :
                                <button disabled
                                    className="btn  btn-sm w-full border border-[#34402d] hover:bg-[#34402d] hover:text-white">Already Booked</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
RoomCard.propTypes = {
    data: PropTypes.object
}
export default RoomCard;