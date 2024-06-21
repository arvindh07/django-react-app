import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "./Loader";

const AuthRoute = () => {
    const [isAuthenticated, setAuthenticated] = useState<Boolean | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("accessToken")){
            // TODO: check if it is valid/expired
            setAuthenticated(true);
        } else{
            setAuthenticated(false);
            navigate("/login")
            return;
        }
    }, [])

    if(isAuthenticated === null){
        return <Loader />
    }

    return <><Outlet /></>
}

export default AuthRoute