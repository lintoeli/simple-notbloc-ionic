import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/models/note';
import { data_notes } from 'src/app/data/notes.data';
import { NoteServiceService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.page.html',
  styleUrls: ['./note-view.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NoteViewPage implements OnInit {

  note!: any;

  constructor(private route: ActivatedRoute,
              private noteService: NoteServiceService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.note = this.noteService.getNoteById(Number(id));
  }

  onTitleChange(event: any) {
    const target = event.target as HTMLElement;
    const newTitle = target.innerText;
    console.log('Nuevo título:', newTitle);
    this.note.title = newTitle;

    // Update the note in the service
    this.noteService.updateNote(this.note.id, this.note);
  }
}
