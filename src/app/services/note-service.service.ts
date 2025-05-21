import { Injectable } from '@angular/core';
import { data_notes } from '../data/notes.data';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  notes = data_notes;
  constructor() { }

  getNotes() {
    return this.notes;
  }

  getNoteById(id: number) {
    return this.notes.find(note => note.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  updateNote(id: number, updatedNote: Note) {
    const index = this.notes.findIndex(note => note.id === id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
    }
  }
}
