import { useEffect, useState } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { jwtDecode } from "jwt-decode";
import { refreshToken } from "@/API/auth";

const AuthRoute = () => {
    const [isAuthenticated, setAuthenticated] = useState<Boolean | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        checkAuth()
    }, [])

    const refreshTokenLocal = async () => {
        try {
            const response = await refreshToken();
            if(response.status === "OK"){
                setAuthenticated(true)
            } else{
                setAuthenticated(false)
            }
        } catch (error) {
            setAuthenticated(false)
        }
    }

    const checkAuth = async () => {
        const accessToken = localStorage.getItem("accessToken");
        if(accessToken){
            // TODO: check if it is valid/expired
            const decodedData: any = jwtDecode(accessToken)
            const now = Date.now() / 1000;
            if(decodedData?.exp < now){
                await refreshTokenLocal();
            } else{
                setAuthenticated(true);
            }
        } else{
            setAuthenticated(false);
            navigate("/login")
            return;
        }
    }

    if(isAuthenticated === null){
        return <Loader />
    }

    return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>
}

export default AuthRoute