

const Newslatter = () => {
    return (
        <div className="bg-[#34402d] text-white flex flex-col md:flex-row md:justify-between items-center py-16 max-w-6xl mx-auto md:px-20 rounded-xl my-28 shadow-2xl text-center w-[90%]">
            <div>
                <h1 className="text-4xl font-bold mb-3">Subscribe to our Newsletter</h1>
            </div>
            <div>
                <label className="input input-bordered flex items-center gap-2 ">
                    <input type="email" className="  text-black rounded w-full input input-xs" placeholder="Type your email here" />
                    <button><span className=" bg-[#34402d] hover:bg-[#222a1d] btn btn-sm text-white  rounded-lg">Subscribe</span></button>
                </label>
            </div>
        </div>
    );
};

export default Newslatter;