

import React, { useState } from "react";
import './NoteCard.css'

function Notecard({ id, title, content, date, deleteNote, updateNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  return (
    <div className="note-card">
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={editTitle} 
            onChange={(e) => setEditTitle(e.target.value)} 
            className="edit-input"
          />
          <textarea 
            value={editContent} 
            onChange={(e) => setEditContent(e.target.value)} 
            className="edit-textarea" 
          />
          <button 
            onClick={() => {
              updateNote(id, editTitle, editContent); 
              setIsEditing(false);
            }} 
            className="save-btn"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="view-mode">
          <h3>{title}</h3>
          <p>{content}</p>
          <small>{date}</small>
          <div className="note-actions">
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              Edit
            </button>
            <button 
              onClick={() => {
                if (window.confirm("Delete this note?")) {
                  deleteNote(id); 
                }
              }}
              className="delete-btn"
            >
              Del
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notecard;