import { Form, Stack, Row, Col, Button} from "react-bootstrap"
import CreatableReactSelect from 'react-select/creatable'
import { Link } from "react-router-dom"
import { useRef, FormEvent } from "react"
import { NoteData, Tag } from "../App"

// props type from App.tsx

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
}

const NoteForm = ({ onSubmit }: NoteFormProps) => {

    // states to store info from title, and textarea
    const titleRef = useRef<HTMLInputElement>(null);
    const markDownRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        onSubmit({
            // exclamation is forcing to say that the value will never be null
            title: titleRef.current!.value,
            markdown: markDownRef.current!.value,
            tags: [],
        })
        
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
            <Row>
                <Col>
                    <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required ref={titleRef} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="tags">
                    <Form.Label>Tags</Form.Label>
                    <CreatableReactSelect
                    isMulti 
                    value={selectedTags.map(tag => {
                        return { label: tag.label, value: tag.id}
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
            <Row>
                <Col>
                    <Form.Group controlId="markdown">
                        <Form.Label>Body</Form.Label>
                        <Form.Control ref={markDownRef} required as="textarea" rows={15} />
                    </Form.Group>
                    <Stack direction="horizontal" gap={2} className="justify-content-end mt-2">
                        <Button variant="primary" type="submit">Save</Button>
                        <Link to="..">
                            <Button variant="outline-secondary" type="button">Cancel</Button>
                        </Link>
                    </Stack>
                </Col>
            </Row>
        </Stack>
    </Form>
  )
}

export default NoteForm