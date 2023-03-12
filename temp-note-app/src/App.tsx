import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import { Container } from 'react-bootstrap'
import NewNote from './pages/NewNote'
import { useLocalStorage } from "./hooks/useLocalStorage"
import { useMemo } from "react"
import { v4 as uuidV4 } from "uuid"
import NoteList from './components/NoteList'
import { NoteLayout } from './components/NoteLayout'
import Note from './components/Note'

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

  function onCreateNote({ tags, ...data}: NoteData){
    setNotes(prevNotes => {
      return [...prevNotes, { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id)}]
    })
  }
  
  function addTag(tag: Tag){
    setTags(prev => [...prev, tag]);
  }

  return (
    <Container className='my-4'>
      <Routes>
        <Route path="/" element={<NoteList availableTags={tags} notes={notesWithTags} />} />
        <Route path="/new" element={<NewNote 
        onSubmit={onCreateNote}
        onAddTag={addTag}
        availableTags={tags}
        />} />
        <Route 
        path="/:id"
        element={<NoteLayout notes={notesWithTags} />}
        >
          <Route index element={<Note />} />
          <Route path="edit" element={<div>Edit</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
