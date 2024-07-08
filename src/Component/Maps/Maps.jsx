import { Map, Marker } from "pigeon-maps"
import { Link } from "react-router-dom";

const Maps = () => {
    return (
        <div className="max-w-7xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-14 gap-x-10 max-w-7xl md:mx-auto mx-7">
                <div className="md:w-1/2 mb-7 md:mb-0">
                    <h1 className="text-4xl font-extrabold ">Find our Office Location!</h1>
                    <p className="my-3 text-lg leading-8">Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci necessitatibus asperiores, illo odio. Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio. Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex</p>
                    <Link to='/rooms'>
                        <button className="btn btn-lg bg-[#34402d] text-white rounded">See Our Rooms</button>
                    </Link>
                </div>
                <div className="flex gap-x-5 md:w-1/2">
                    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                        <Marker width={50} anchor={[50.879, 4.6997]} />
                    </Map>
                </div>
            </div>

        </div>
    );
};

export default Maps;