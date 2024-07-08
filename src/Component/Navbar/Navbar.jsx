import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/Authprovider";


const Navbar = () => {
    const { user, signOutUser } = useContext(authContext)
    const navItem = <>
        <li className="font-medium"><Link>Home</Link></li>
        <li className="font-medium"><Link to='/about'>About</Link></li>
        <li className="font-medium"><Link to='/rooms'>Rooms</Link></li>
        <li className="font-medium"><Link to='/contact'>Contact Us</Link></li>
        <li className="font-medium"><Link to='/mybookings'>My Bookings</Link></li>
    </>

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Sign Out User successfully');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100 border-b-2">
            <div className="max-w-7xl mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className="  uppercase text-lg lg:text-3xl font-extrabold lg:font-black cursor-pointer">Golden Crest</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className=" m-1 tooltip tooltip-left" data-tip={user.displayName}>
                                <div className="avatar">
                                    <div className="w-12 rounded-full ring ring-[#34402d] ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="font-medium"><span>My Profile</span></li>
                                <li className="font-medium"><span onClick={handleSignOut}>Log Out</span></li>
                            </ul>
                        </div> :
                            <>
                                <Link to='/login'><button className=" border-2 border-[#34402d] rounded px-5 py-2 mr-4 hover:bg-[#34402d] hover:text-white duration-300">Sign In</button></Link>
                                <Link to='/register'><button className=" bg-[#34402d] text-white rounded px-5 py-2 hidden lg:flex">SignUp</button></Link>
                            </>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;