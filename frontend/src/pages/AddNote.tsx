import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"

const AddNote = () => {
    const [note, setNote] = useState({
        title: "",
        description: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setNote((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleAddNote = () => {

    }

    return (
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
    )
}

export default AddNote