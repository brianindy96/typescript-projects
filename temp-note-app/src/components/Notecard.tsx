import { Tag } from "../App"

export type SimplifiedNotes = {
    title: string
    id: string
    tags: Tag[]
}

const NoteCard = ({ title, id, tags }: SimplifiedNotes) => {
  return (
    <div>Notecard</div>
  )
}

export default NoteCard