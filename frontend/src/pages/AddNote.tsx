import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import Loader from "./Loader"
import { useToast } from "@/components/ui/use-toast"
import { addNoteHandler } from "@/API/note"

const AddNote = (props: any) => {
    const { handlegetNotes } = props;
    const [note, setNote] = useState({
        title: "",
        description: ""
    })
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNote((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleAddNote = async (e: any) => {
        setLoading(true);
        e.preventDefault();
        const response = await addNoteHandler(note);
        setLoading(false);
        if (response.status === "OK") {
            toast({
                title: "Note added successfully"
            })
        } else {
            toast({
                title: "Failed",
                description: response.error
            })
        }
        handlegetNotes();
        setNote({
            title: "",
            description: ""
        })
    }

    return (
        <>
            {loading
                ? <Loader />
                : (
                    <div className="w-2/4 mx-auto mt-20">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center my-8">
                            Add Note
                        </h1>
                        <form action="">
                            <Input
                                type="text"
                                name="title"
                                value={note?.title}
                                className="my-4"
                                placeholder="Title"
                                required
                                onChange={(e) => handleChange(e)} />
                            <Textarea
                                name="description"
                                value={note?.description}
                                rows={10}
                                className="my-4 resize-none"
                                placeholder="Description"
                                required
                                onChange={(e) => handleChange(e)} />
                            <Button className="mt-8 mx-auto block" onClick={handleAddNote}>Create</Button>
                        </form>
                    </div>
                )}
        </>
    )
}

export default AddNote