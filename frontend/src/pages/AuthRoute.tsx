import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom";

const AuthRoute = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated){
            navigate("/login")
            return;
        } 
    }, [])

    return <><Outlet /></>
}

export default AuthRoute