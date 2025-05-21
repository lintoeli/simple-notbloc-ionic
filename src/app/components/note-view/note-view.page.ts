import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { data_notes } from 'src/app/data/notes.data';
import { NoteService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.page.html',
  styleUrls: ['./note-view.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NoteViewPage implements OnInit {

  note!: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
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
    console.log('Notas:', this.noteService.getNotes);
  }

  onContentChange(event: any) {
    const target = event.target as HTMLElement;
    const newContent = target.innerText;
    console.log('Nuevo contenido:', newContent);
    this.note.content = newContent;

    // Update the note in the service
    this.noteService.updateNote(this.note.id, this.note);
    console.log('Notas:', this.noteService.getNotes);
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id);
    this.router.navigate(['/home']);
  }
}
