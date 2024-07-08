


const Contact = () => {
    return (
        <div>
            <div className=" max-w-5xl mx-auto ">
                <div className=" flex flex-col md:flex-row justify-around items-center py-20">
                    <div className="w-full md:w-2/4 mb-8 md:mb-0">
                        <img src="https://i.ibb.co/vv3jY81/undraw-Personal-email-re-4lx7.png" className=" w-full
                        md:max-w-lg rounded-lg" />
                    </div>
                    <div className="flex-1 space-y-5">
                        <input type="text" placeholder="Type Your Name" className="input input-bordered w-full " /> <br />
                        <input type="email" placeholder="Type Your E-mail" className="input input-bordered w-full " /> <br />
                        <textarea className="textarea textarea-lg w-full  textarea-bordered" placeholder="Bio"></textarea> <br />
                        <input className="btn w-full text-white bg-[#34402d]" type="submit" value="Send" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;