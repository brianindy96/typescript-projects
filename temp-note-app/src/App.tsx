import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import { Container } from 'react-bootstrap'
import NewNote from './pages/NewNote'
import { useLocalStorage } from "./hooks/useLocalStorage"
import { useMemo } from "react"
export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}


export type Tag = {
  id: string
  label: string
}




function App() {

  // states
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
      return notes.map(note => {
        return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))}
      })
  }, [notes, tags])

  return (
    <Container className='my-4'>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<div>Show</div>} />
          <Route path="edit" element={<div>Edit</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
