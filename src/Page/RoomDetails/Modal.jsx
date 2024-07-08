import PropTypes from 'prop-types';
import { useContext, useRef} from 'react';
import { authContext } from '../../Context/Authprovider';

const Modal = ({ id,image, name, description, price, setRoomAvailability}) => {
    const { user } = useContext(authContext)
    const dateInputRef = useRef(null)
    const handleConfirmedOrder = (id) => {
        const date = dateInputRef.current.value;
        const newBooking = {
            room_id: id,
            room_img: image,
            room_name: name,
            custmer_email: user?.email,
            booking_date: date
        }
        //booked Room
        fetch('https://backend-server-seven.vercel.app/booked', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setRoomAvailability('booked')
                    fetch(`https://backend-server-seven.vercel.app/rooms/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ availability: 'booked' })
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                }
                //update room availability

            })
    }
    return (
        <div>

            <dialog id={id} className="modal">
                <div className="modal-box text-start">
                    <div className="flex flex-col md:flex-row justify-between items-center mt-5 ">
                        <div className='mb-5 md:mb-0'>
                            <p>{id}</p>
                            <h3 className="font-bold text-3xl underline">{name}</h3>
                            <p>Price Per Night <span className="text-lg font-bold">{price}</span></p>
                        </div>

                       <input
                            type="date"
                            ref={dateInputRef}
                            defaultValue="2020-05-14"
                        />
                    </div>
                    <p className="py-4">{description.slice(0, 150)}....</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => handleConfirmedOrder(id)} className="bg-[#34402d] hover:bg-[#283122] text-white rounded btn btn-wide ">Confirmed Order</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

Modal.propTypes = {
    setRoomAvailability: PropTypes.node,
    name: PropTypes.string,
    image: PropTypes.node,
    description: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string
}
export default Modal;