import { Badge, Card, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Tag } from "../App"
import styles from "./NoteList.modules.css"

export type SimplifiedNotes = {
    title: string
    id: string
    tags: Tag[]
}

const NoteCard = ({ title, id, tags }: SimplifiedNotes) => {
  return (
    <Card 
    as={Link} to={`/${id}`}
    className={`h-100 text-reset text-decoration-none ${styles.card}`}
    >
        <Card.Body>
            <Stack gap={2} className="align-items-center justify-content-center h-100">
                <Card.Title>{title}</Card.Title>
                {tags.length > 0 && (
                    <Stack className="justify-content-center flex-wrap" gap={1} direction="horizontal">
                        {tags.map(tag => (
                            <Badge className="text-truncate" key={tag.id}>{tag.label}</Badge>
                        ))}  
                    </Stack>
                )}   
            </Stack>
        </Card.Body>
        

    </Card>
  )
}

export default NoteCard