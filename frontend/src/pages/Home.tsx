import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    return;
  }

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Home