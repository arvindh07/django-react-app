import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface FormInterface{
    method: "LOGIN" | "REGISTER"
}
const Form = (props: FormInterface) => {
    const {method} = props;

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
                <Input type="email" className="my-4" placeholder="Email" required/>
                <Input type="password" className="mb-2" placeholder="Password" required/>
                {method === "LOGIN" 
                    ? <Button className="mt-8 mx-auto block" onClick={handleLogin}>Login</Button> 
                    : <Button className="mt-8 mx-auto block" onClick={handleRegister}>Register</Button>}
            </form>
        </div>
    )
}

export default Form;