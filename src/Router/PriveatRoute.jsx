import { useContext } from "react";
import { authContext } from "../Context/Authprovider";
import { Navigate } from "react-router-dom";


const PriveatRoute = ({children}) => {
    const {loading, user} = useContext(authContext)

    if(loading){
       return <span className="loading loading-dots loading-lg"></span>
    }
    if(!user){
        
       return <Navigate to="/login"/>
    }
    return children
};

export default PriveatRoute;