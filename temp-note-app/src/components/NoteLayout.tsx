import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom"
import { Note } from "../App"

type NoteLayoutProps = {
    notes: Note[]
}

export function NoteLayout({ notes}: NoteLayoutProps) {
  
  const { id } = useParams()
  const note = notes.find(n => n.id === id);
    //   replace that URL so we don't go back to the note URL that doesn't exist
  if(note == null) return <Navigate to="/" replace />

  return <Outlet context={note} />
}

export function useNote(){
    return useOutletContext<Note>()
}