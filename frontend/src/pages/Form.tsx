import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom";

interface FormInterface {
    method: "LOGIN" | "REGISTER"
}
const Form = (props: FormInterface) => {
    const { method } = props;
    const navigate = useNavigate();

    const handleLogin = () => {

    }

    const handleRegister = () => {

    }

    return (
        <div className="w-1/4 mx-auto mt-20">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center my-8">
                {method === "LOGIN" ? "Login form" : "Register Form"}
            </h1>
            <form action="">
                <Input type="email" className="my-4" placeholder="Email" required />
                <Input type="password" className="mb-2" placeholder="Password" required />
                {method === "LOGIN"
                    ? <Button className="mt-8 mx-auto block" onClick={handleLogin}>Login</Button>
                    : <Button className="mt-8 mx-auto block" onClick={handleRegister}>Register</Button>}
                {/* <small className="text-sm font-medium leading-none">
                        ? "New? Please register"
                        : "Already user? Please login" }
                        </small> */}
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