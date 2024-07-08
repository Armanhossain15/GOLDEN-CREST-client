import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import ReviewCard from "./ReviewCard";


const RoomDetails = () => {
    const currentRoom = useLoaderData()
    const [reviews, setReviews] = useState()

    const { _id, name, description, image, price_per_night, room_size, availability, special_offers } = currentRoom[0]
    const [roomAvailability, setRoomAvailability] = useState(availability)
    const handleBook = () => {
        document.getElementById(_id).showModal()
    }

    useEffect(() => {
        fetch(`https://backend-server-seven.vercel.app/roomReviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])


    return (
        <div className="max-w-6xl  my-10 mx-4 lg:mx-auto">
            <div className="lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-2 ">
                <img src={image} alt="" className=" col-span-2 row-span-2" />
                <img src={image} alt="" className=" col-span-1 row-span-1 hidden lg:flex" />
                <img src={image} alt="" className=" col-span-1 row-span-1  hidden lg:flex" />
                <img src={image} alt="" className=" col-span-1 row-span-1 hidden lg:flex" />
                <img src={image} alt="" className=" col-span-1 row-span-1 hidden lg:flex" />
            </div>

            <div className=" lg:flex justify-between items-start my-4">
                <div >
                    <div className="flex flex-col md:flex-row md:items-center gap-x-3">
                        <h1 className="text-5xl font-bold mb-2"> {name}</h1>
                        <p className="flex items-center gap-x-1 text-xl mb-3 md:mb-0">Reviews {reviews?.length} <FaStar className="text-orange-500" /></p>
                    </div>
                    {
                        special_offers && <div className="bg-[#d5d8d4] pr-14 pl-4 py-2">
                            <span className="text-xl bg-red-700 px-5 text-white">Special Offer</span>
                            <h2 className="text-2xl font-medium">{special_offers}</h2>
                        </div>
                    }
                </div>
                <div className="divider lg:hidden"></div>
                <div className="text-center ">
                    <h1 className="text-3xl font-extrabold text-[#34402d]">{price_per_night}</h1>
                    <span >Price Per Night</span> <br />

                    <div >
                        {
                            roomAvailability === 'Available' ?
                                <>
                                    <button onClick={handleBook} className=" bg-[#34402d] text-white rounded  mt-2 lg:mt-5 btn btn-wide">Book Now</button>
                                    <Modal
                                        img={image}
                                        name={name}
                                        description={description}
                                        price={price_per_night}
                                        id={_id}
                                        setRoomAvailability={setRoomAvailability}
                                    ></Modal>
                                </>

                                :
                                <button className=" bg-[#34402d] text-white rounded  mt-2 lg:mt-5 btn btn-wide " disabled>Already Booked</button>
                        }
                    </div>
                </div>
            </div>
            <h1 className="text-2xl font-extrabold mt-16 mb-4">Additional Description</h1>
            <p className="text-lg md:text-xl leading-8	">{description.slice(0, 350)}</p> <br />
            <p className="text-lg md:text-xl leading-8	">{description.slice(350)}</p>
            {
                reviews?.length !== 0 &&
                <div>
                    <h1 className=" mt-10 text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-6">Reviews of {name}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            reviews?.map((review, index) => <ReviewCard
                                key={index}
                                review={review}
                            ></ReviewCard>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default RoomDetails;