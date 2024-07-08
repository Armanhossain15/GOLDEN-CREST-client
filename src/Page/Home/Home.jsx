
import Banner from "../../Component/Banner/Banner";
import Reviews from "../../Component/Reviews/Reviews";
import FeatureRooms from "../../Component/FeatureRooms/FeatureRooms";
import { useLoaderData } from "react-router-dom";
import Newslatter from "../../Component/Newslatter/Newslatter";
import Maps from "../../Component/Maps/Maps";
// import SecondBanner from "../../Component/SecondBanner/SecondBanner";


const Home = () => {
    const allRoomData = useLoaderData()
    const firstEightRoomData = allRoomData?.slice(0, 8)
    console.log(allRoomData);

    // const handleDelete = () => {
        
    //     fetch('https://backend-server-seven.vercel.app/deleteAll', {
    //         method: 'DELETE',
    //     })
    //     .then(res => res.json())
    //     .then(data=> console.log(data))
    // }

    return (
        <div>
            <Banner/>
            {/* <SecondBanner/> */}
            {/* <button onClick={handleDelete}>Delete all Data</button> */}
            <FeatureRooms roomsData={firstEightRoomData}></FeatureRooms>
            <Newslatter/>
            <Reviews></Reviews>
            <Maps/>
        </div>
    );
};

export default Home;