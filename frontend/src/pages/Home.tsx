import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import AddNote from "./AddNote";
import { useEffect, useState } from "react";
import { getNotes } from "@/API/note";
import NoteCard from "./NoteCard";
import Loader from "./Loader";

const Home = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    return;
  }

  const handlegetNotes = async () => {
    setLoading(true);
    const response = await getNotes();
    setLoading(false);
    setNotes(response.data);
  }

  useEffect(() => {
    handlegetNotes();
  }, [])

  return (
    <>
      {loading
        ? <Loader />
        : (
          <div>
            <div className="bg-crimson w-11/12 p-4 mx-auto">
              <Button className="ml-auto block" onClick={handleLogout}>Logout</Button>
              <AddNote handlegetNotes={handlegetNotes} />
              <div className="flex gap-4 mt-6 flex-wrap">
                {notes?.length > 0 && notes?.map((note: any) => {
                  return (
                    <NoteCard key={note?.title} note={note} />
                  )
                })}
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default Home