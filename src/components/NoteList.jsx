import React from "react";
import NoteCard from './NoteCard'
import './NoteList.css'

function NoteList({notes , deleteNote , updateNote , filteredNote}){
    return(
        <div>
            {notes.map((note)=>(
                <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.title}
                deleteNote={deleteNote}
                updateNote={updateNote}
                filteredNote={filteredNote}
                />
            ))}
        </div>
    )
}
export default NoteList