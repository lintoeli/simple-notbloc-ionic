import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { data_notes } from 'src/app/data/notes.data';
import { Note } from 'src/app/models/note';
import { NoteCardComponent } from '../note-card/note-card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, NoteCardComponent],
})
export class HomePage {
  notes: Note[] = [];
  constructor() {}

  ngOnInit() {
    this.notes = data_notes;
      
  }
}
