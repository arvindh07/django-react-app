import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import AddNote from "./AddNote";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    return;
  }

  return (
    <div>
      <div className="bg-crimson w-11/12 p-4">
        <Button className="ml-auto block" onClick={handleLogout}>Logout</Button>
      </div>
      <AddNote />
    </div>
  )
}

export default Home