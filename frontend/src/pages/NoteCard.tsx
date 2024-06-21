import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import TimeAgo from 'javascript-time-ago'

// English.
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo('en-US')

const NoteCard = (props: any) => {
    const {note} = props;
    const changeTime = (dt: any) => {        
        return timeAgo.format(new Date(dt))
    }

    return (
        <Card className="w-1/4">
            <CardHeader>
                <CardTitle>{note?.title}</CardTitle>
                <CardDescription>{changeTime(note?.created_at)}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{note?.description}</p>
            </CardContent>
        </Card>
    )
}

export default NoteCard