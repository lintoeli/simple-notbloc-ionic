import { Injectable } from '@angular/core';
import { data_notes } from '../data/notes.data';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  // notes = data_notes;
  constructor() { }

  getNotes(): Note[] {
    return JSON.parse(localStorage.getItem('notes') || '[]');
  }

  getNoteById(id: number) {
    localStorage.getItem('notes');
    const notes = this.getNotes();
    return notes.find((note: Note) => note.id === id);
  }

  addNote(note: Note) {
    var notes = this.getNotes();
    var notes_updated = [...notes, note];
    localStorage.setItem('notes', JSON.stringify(notes_updated));
  }

  updateNote(id: number, updatedNote: Note) {
    var notes = this.getNotes();
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
      notes[index] = updatedNote;
    }

    localStorage.setItem('notes', JSON.stringify(notes));
  }

  deleteNote(id: number) {
    var notes = this.getNotes();
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
      notes.splice(index, 1);
    }

    localStorage.setItem('notes', JSON.stringify(notes));
  }

  getNewId(): number {
    var notes = this.getNotes();
    if (notes.length === 0) return 1;

    return Math.max(...notes.map(note => note.id)) + 1;
  }
}
