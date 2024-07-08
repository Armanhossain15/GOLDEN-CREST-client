import PropTypes from 'prop-types';
import RoomCard from './RoomCard';


const FeatureRooms = ({ roomsData }) => {
    
    return (
        <div className="py-2">
            <h1 className='text-4xl text-center mt-4 mb-6 font-extrabold'>Featured Rooms</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-7 md:mx-14  lg:max-w-7xl lg:mx-auto">
                {
                    roomsData?.map((data, index) => <RoomCard key={index} data={data}></RoomCard>)
                }
            </div>
        </div>
    );
};
FeatureRooms.propTypes = {
    roomsData: PropTypes.array
}
export default FeatureRooms;