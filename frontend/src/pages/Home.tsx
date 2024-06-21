import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import AddNote from "./AddNote";
import { useEffect, useState } from "react";
import { getNotes } from "@/API/note";

const Home = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    return;
  }

  const handlegetNotes = async() => {
    const response = await getNotes();
    setNotes(response.data);
  }

  useEffect(() => {
    handlegetNotes();
  }, [])

  return (
    <div>
      <div className="bg-crimson w-11/12 p-4">
        <Button className="ml-auto block" onClick={handleLogout}>Logout</Button>
        {notes?.length > 0 && notes?.map(({title, description}) => {
          return (
            <>
              <h1>{title}</h1>  
              <p>{description}</p>
            </>
          )
        })}
      </div>
      <AddNote setNotes={setNotes} />
    </div>
  )
}

export default Home