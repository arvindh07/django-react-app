import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom";

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
        return <h1>Loading...</h1>
    }

    return <><Outlet /></>
}

export default AuthRoute