import { Form, Stack, Row, Col, Button, Modal} from "react-bootstrap"
import { Link } from "react-router-dom"
import ReactSelect from "react-select"
import{ useState, useMemo } from "react"
import { Note, Tag } from "../App"
import NoteCard from "./Notecard"

export type NoteListProps = {
    availableTags: Tag[]
    notes: Note[]
}

export type EditTagsModalProps = {
    availableTags: Tag[]
    show: boolean
    handleClose: () => void
}

const NoteList = ({ availableTags, notes }: NoteListProps ) => {

    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [title, setTitle] = useState("");

    const [editTagsModalIsOpen, setEditTagsModalIsOpen] = useState(false)
    
    const filteredNotes = useMemo(() => {
        return notes.filter(note => {
            // if the title is empty return nothing, or if the title is not empty and the note title includes the title, return the corresponding notes
            return (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) 
            && 
            // and also checks if selectedTags is empty or if the selectedTags.every tag is equal to the note tag
            (selectedTags.length === 0 || selectedTags.every(tag => note.tags.some(noteTag => noteTag.id === tag.id)))
        })
    }, [title, selectedTags, notes])
  return (
    <>
        <Row className="align-items-center mb-4">
            <Col><h1>Notes</h1></Col>
            <Col xs="auto">
                <Stack gap={2} direction="horizontal">
                    <Link to="/new">
                        <Button variant="primary">Create</Button>
                    </Link>
                    <Button 
                    onClick={() => setEditTagsModalIsOpen(true)}
                    variant="outline-secondary">Edit Tags</Button>
                </Stack>
            </Col>
        </Row>
        <Form>
        <Row className="mb-4">
                <Col>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="tags">
                    <Form.Label>Tags</Form.Label>
                    <ReactSelect
                    isMulti 
                    value={selectedTags.map(tag => {
                        return { label: tag.label, value: tag.id}
                    })}
                    options={availableTags.map(tag => {
                        return { label: tag.label, value: tag.id }
                    })}
                    onChange={tags => {
                        setSelectedTags(tags.map(tag => {
                            return { label: tag.label, id: tag.value }
                        }))
                    }}
                    />
                    </Form.Group>
                </Col>
        </Row>
        </Form>
        <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
            {filteredNotes.map(note => (
                <Col key={note.id}>
                    <NoteCard id={note.id} title={note.title} tags={note.tags} />
                </Col>
            ))}
        </Row>
        <EditTagsModal show={editTagsModalIsOpen} handleClose={() => setEditTagsModalIsOpen(false)} availableTags={availableTags}  />
    </>
  )
}

function EditTagsModal({ availableTags, show, handleClose }: EditTagsModalProps) { 
    return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Stack gap={2}>
                    {availableTags.map(tag => (
                        <Row key={tag.id}>
                            <Col>
                                <Form.Control type="text" value={tag.label}></Form.Control>
                            </Col>
                            <Col xs="auto">
                                <Button variant="outline-danger">
                                    &times;
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Stack>
            </Form>
        </Modal.Body>
    </Modal>
    )
}

export default NoteList