import { useLoaderData } from "react-router-dom";
import FeatureRooms from "../../Component/FeatureRooms/FeatureRooms";
import { useEffect, useState } from "react";


const Romes = () => {
    const [allRoomData, setAllRoomData] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 8


    useEffect(() => {
        fetch(`https://backend-server-seven.vercel.app/rooms?page=${currentPage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setAllRoomData(data))
    }, [currentPage, itemsPerPage])

    
    const {count} = useLoaderData()
    // console.log();
    const page = Math.ceil(parseInt(count) / itemsPerPage)
    const pages = [...Array(page).keys()]
    // console.log(pages);


    const handleCurrentPage = page => {
        setCurrentPage(parseInt(page))
    }

    const handlePrev = () => {
        if (currentPage !== 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div>
            <FeatureRooms roomsData={allRoomData}></FeatureRooms>
            <div className={`text-center my-12 `}>
                <button onClick={handlePrev}
                    className={`btn btn-active mr-5 border-2 border-[#34402d] hover:border-2 hover:border-[#34402d]  ${currentPage === 0 && 'btn-disabled'}`}>Prev</button>
                {
                    pages.map((page, index) => <button 
                        onClick={() => handleCurrentPage(page)}
                        className={`btn btn-square border border-gray-900 hover:border hover:border-gray-900 mr-5 ${currentPage === page && 'bg-[#34402d] text-white mb-5'}`} key={index}> {page} </button>)
                }
                <button onClick={handleNext}
                    className={`btn btn-active border-2 border-[#34402d] hover:border-2 hover:border-[#34402d] ${currentPage === pages.length - 1 && 'btn-disabled'}`}>Next</button>
            </div>
        </div>
    );
};

export default Romes;