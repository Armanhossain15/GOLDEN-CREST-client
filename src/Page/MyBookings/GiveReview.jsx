import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/Authprovider";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const GiveReview = () => {
    const { user } = useContext(authContext)
    const navigate = useNavigate()
    const [currentRoom, setCurrentRoom] = useState({})
    const params = useParams()
    useEffect(() => {
        fetch(`https://backend-server-seven.vercel.app/giveReview/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrentRoom(data))
    }, [params.id])



    console.log('selectedRoom', currentRoom[0]);
    const handleGiveReview = (e) => {
        e.preventDefault()
        const form = e.target
        const designation = form.designation.value
        const peragraph = form.peragraph.value
        const review = {
            rooms_id: currentRoom[0]?.room_id,
            customer_image: user?.photoURL,
            customer_name: user?.displayName,
            designation: designation,
            opinion: peragraph
        }

        // console.log(review);
        fetch('https://backend-server-seven.vercel.app/giveReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
                
                form.reset()
                navigate(-1)
            })
    }
    return (
        <div>
            <form onSubmit={handleGiveReview}
                className="w-2/5 mx-auto bg-white border-2 p-8 shadow-lg my-10 rounded">
                <div className="">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" value={user.displayName}
                        name="name" placeholder="name" className=" input input-bordered rounded w-full" />
                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text">Designation</span>
                    </label>
                    <input type="text" name="designation" placeholder="Designation" className=" input input-bordered rounded w-full" />
                </div>
                <div className="form-control flex-1">
                    <label className="label">
                        <span className="label-text">Your Review</span>
                    </label>
                    <textarea name="peragraph"
                        className="textarea textarea-bordered textarea-lg w-full" placeholder="Bio"></textarea>
                </div>
                <div className="form-control mt-2">
                    <input className="btn bg-[#34402d] text-white rounded text-base"
                        type="submit" value="Submit Review" />

                </div>
            </form>
        </div>
    );
};

export default GiveReview;