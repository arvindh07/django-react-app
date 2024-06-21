import { loginHandler, registerHandler } from "@/API/auth";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast"

interface FormInterface {
    method: "LOGIN" | "REGISTER"
}
const Form = (props: FormInterface) => {
    const { method } = props;
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { toast } = useToast()

    const handleLogin = async (e: any) => {
        e.preventDefault()
        const formData = {username, password};
        const response = await loginHandler(formData);
        if(response.status === "OK"){
            toast({
                title: "Login Successful"
            })
        } else{
            toast({
                title: "Login Failed",
                description: response.error
            })
        }
    }

    const handleRegister = async (e: any) => {
        e.preventDefault();
        const formData = {username, password};
        const response = await registerHandler(formData);
        if(response.status === "OK"){
            toast({
                title: "Account created successfully"
            })
        } else{
            toast({
                title: "Registration Failed",
                description: response.error
            })
        }
    }

    return (
        <div className="w-1/4 mx-auto mt-20">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center my-8">
                {method === "LOGIN" ? "Login form" : "Register Form"}
            </h1>
            <form action="">
                <Input type="text" className="my-4" placeholder="Username" required onChange={(e) => setUsername(e.target.value)}/>
                <Input type="password" className="mb-2" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                {method === "LOGIN"
                    ? <Button className="mt-8 mx-auto block" onClick={handleLogin}>Login</Button>
                    : <Button className="mt-8 mx-auto block" onClick={handleRegister}>Register</Button>}
                {method === "LOGIN"
                    ? <p className="text-sm text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                        Don't have an account?
                        <small
                            onClick={() => navigate("/register")} 
                            className="text-sm font-medium leading-none ml-2 text-black tracking-wider hover:underline cursor-pointer">Sign up</small>
                    </p>
                    : <p className="text-sm text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                        Have an account?
                        <small 
                            onClick={() => navigate("/login")} 
                            className="text-sm font-medium leading-none ml-2 text-black tracking-wider hover:underline cursor-pointer">Log in</small>
                    </p>}
            </form>
        </div>
    )
}

export default Form;