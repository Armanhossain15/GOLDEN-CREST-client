import { useState } from "react";
import Swal from "sweetalert2";


const UpdateDate = ({ id }) => {
    const [date, setDate] = useState('')
    const handleInput = e => {
        setDate(e.target.value);
        console.log(date);
    }
    console.log(id);
    const handleUpdateDate = id => {

        fetch(`https://backend-server-seven.vercel.app/updateDate?id=${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ booking_date: date })
        })
            .then(res => res.json())
            .then((data) => {
                if(data.modifiedCount> 0){
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                      });
                }
            })
    }
    return (
        <dialog id={id} className="modal">
            <div className="modal-box text-center">
                <h3 className="font-bold text-lg mb-5">{id}</h3>
                <input onChange={handleInput} type="date" name="date" className="input input-bordered" />
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={() => handleUpdateDate(id)} className="bg-[#34402d] hover:bg-[#283122] text-white rounded btn btn-wide ">Update Date</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default UpdateDate;