import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCard, IonCardContent, IonButtons, IonButton } from '@ionic/angular/standalone';
import { data_notes } from 'src/app/data/notes.data';
import { Note } from 'src/app/models/note';
import { NoteCardComponent } from '../note-card/note-card.component';
import { NoteService } from 'src/app/services/note-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonButtons, IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, NoteCardComponent],
})
export class HomePage {

  notes: Note[] = [];

  constructor(private noteService: NoteService,
    private router: Router
  ) { }

  ionViewWillEnter() {
    // Recuperar notas ordenadas por fecha de actualización, mas recientes primero
    this.notes = this.noteService.getNotes().sort((a, b) =>
      new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime()
    );
  }

  createNote() {
    const note: Note = {
      id: this.noteService.getNewId(),
      title: 'New Note',
      content: '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.noteService.addNote(note);

    console.log(this.noteService.getNotes());
    this.router.navigate(['/note-view', note.id]);
  }

  clearNotes() {
    localStorage.removeItem('notes');
    this.notes = [];
  }
}
