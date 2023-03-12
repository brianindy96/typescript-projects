import { Badge, Col, Row, Stack } from 'react-bootstrap';
import { useNote } from './NoteLayout'

function Note() {
  const note = useNote();
  
    return (
    <Row className='align-items-center mb-4'>
        <Col>
            <h1>{note.title}</h1>
            {note.tags.length > 0 && (
                <Stack 
                className="flex-wrap" 
                gap={1} 
                direction="horizontal">
                    {note.tags.map(tag => (
                        <Badge className="text-truncate" key={tag.id}>{tag.label}</Badge>
                    ))}  
                </Stack>
                )} 
        </Col>
    </Row>
  )
}

export default Note