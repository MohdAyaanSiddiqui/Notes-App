import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import Login from "./components/Login";
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const addNote = (newNote) => {
    setNotes([...notes, {
      id: Date.now(),
      title: newNote.title,
      content: newNote.content,
      date: new Date().toLocaleString()
    }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };


  const updateNote = (id, title, content) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, title, content } : note
      )
    );
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) return <div className="app-loading">Loading...</div>;
  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="app-container">
      <Header user={user} handleLogout={handleLogout} />
      <NoteInput addNote={addNote} />
      <NoteList 
        notes={notes} 
        deleteNote={deleteNote}
        updateNote={updateNote}
        
      />
    </div>
  );
}
export default App;