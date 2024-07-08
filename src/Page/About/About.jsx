import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCarSportOutline } from "react-icons/io5";
import { CiWifiOn } from "react-icons/ci";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";


const About = () => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-14 gap-x-10 max-w-7xl md:mx-auto mx-7">
                <div className="md:w-1/2 mb-7 md:mb-0">
                    <h1 className="text-4xl font-extrabold ">Start your Amazing Adventure!</h1>
                    <p className="my-3 text-lg leading-8">Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci necessitatibus asperiores, illo odio. Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio. Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex</p>
                    <Link to='/rooms'>
                        <button className="btn btn-lg bg-[#34402d] text-white rounded">See Our Rooms</button>
                    </Link>
                </div>
                <div className="flex gap-x-5 md:w-1/2">
                    <img src="https://img.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg?t=st=1716826731~exp=1716830331~hmac=7aee6e2facd4459a6b5690f3d367d845198ec64e827e800c368b4eb3baf5491a&w=996" className="w-full h-[400px] object-cover rounded-md " />
                    

                </div>
            </div>
            {/* service */}
            <div className="py-24 bg-[#d4dcd0] my-16">
                <h1 className="text-5xl font-bold text-center mb-10">Our Service</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-1 gap-5  max-w-7xl mx-auto">
                    <div className="bg-[#d4dcd0] mx-10 lg:mx-0 flex flex-col items-center justify-center shadow-lg border-8 border-white rounded-lg py-10">
                        <IoCarSportOutline className="text-5xl " />
                        <p className="font-medium">Airport transfer</p>
                    </div>
                    <div className="bg-[#d4dcd0] mx-10 lg:mx-0 flex flex-col items-center justify-center shadow-lg border-8 border-white rounded-lg py-10">
                        <CiWifiOn className="text-5xl " />
                        <p className="font-medium">Free WIFI</p>
                    </div>
                    <div className="bg-[#d4dcd0] mx-10 lg:mx-0 flex flex-col items-center justify-center shadow-lg border-8 border-white rounded-lg py-10">
                        <MdOutlineLocalLaundryService className="text-5xl " />
                        <p className="font-medium">Free Laundry</p>
                    </div>
                    <div className="bg-[#d4dcd0] mx-10 lg:mx-0 flex flex-col items-center justify-center shadow-lg border-8 border-white rounded-lg py-10">
                        <GiCctvCamera className="text-5xl " />
                        <p className="font-medium">Under protection</p>
                    </div>
                </div>
            </div>
            {/* team member */}
            <h1 className="text-5xl font-bold text-center mt-8 mb-6">Our Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-5 text-white mb-16 max-w-7xl md:mx-auto mx-6">
            
                <div className="shadow-2xl bg-[#34402d] p-5 text-center rounded-md">
                    <img src="https://lh3.googleusercontent.com/p/AF1QipNIg378-_t6L1I3zlcG3la36Rise3m2GyrX84o=s1360-w1360-h1020" alt="team member image" className=""/>
                    <h1 className="text-2xl font-extrabold mt-4">Arman Hossain</h1>
                    <p className="text-base font-normal">Chief Administrator</p>
                    <div className="mt-3">
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaFacebookF className="text-lg text-white" />
                        </button>
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaInstagram className="text-lg text-white" />
                        </button>
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaTwitter className="text-lg text-white" />
                        </button>
                    </div>
                </div>
                <div className="shadow-2xl bg-[#34402d] p-5 text-center rounded-md">
                    <img src="https://lh3.googleusercontent.com/p/AF1QipNIg378-_t6L1I3zlcG3la36Rise3m2GyrX84o=s1360-w1360-h1020" alt="team member image" className=""/>
                    <h1 className="text-2xl font-extrabold mt-4">Arman Hossain</h1>
                    <p className="text-base font-normal">Surfing coach</p>
                    <div className="mt-3">
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaFacebookF className="text-lg text-white" />
                        </button>
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaInstagram className="text-lg text-white" />
                        </button>
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaTwitter className="text-lg text-white" />
                        </button>
                    </div>
                </div>
                <div className="shadow-2xl bg-[#34402d] p-5 text-center rounded-md">
                    <img src="https://lh3.googleusercontent.com/p/AF1QipNIg378-_t6L1I3zlcG3la36Rise3m2GyrX84o=s1360-w1360-h1020" alt="team member image" className=""/>
                    <h1 className="text-2xl font-extrabold mt-4">Arman Hossain</h1>
                    <p className="text-base font-normal">Manager</p>
                    <div className="mt-3">
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaFacebookF className="text-lg text-white" />
                        </button>
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaInstagram className="text-lg text-white" />
                        </button>
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaTwitter className="text-lg text-white" />
                        </button>
                    </div>
                </div>
                <div className="shadow-2xl bg-[#34402d] p-5 text-center rounded-md">
                    <img src="https://lh3.googleusercontent.com/p/AF1QipNIg378-_t6L1I3zlcG3la36Rise3m2GyrX84o=s1360-w1360-h1020" alt="team member image" className=""/>
                    <h1 className="text-2xl font-extrabold mt-4">Arman Hossain</h1>
                    <p className="text-base font-normal">Big Boss</p>
                    <div className="mt-3">
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaFacebookF className="text-lg text-white" />
                        </button>
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaInstagram className="text-lg text-white" />
                        </button>
                        <button className="btn btn-sm btn-circle btn-outline border-2  border-white mr-4">
                            <FaTwitter className="text-lg text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;