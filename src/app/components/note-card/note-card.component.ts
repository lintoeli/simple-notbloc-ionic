import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonIcon, IonButton, IonImg } from "@ionic/angular/standalone";
import { Note } from 'src/app/models/note';

@Component({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  imports: [IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle],
})
export class NoteCardComponent  implements OnInit {

  @Input() note?: Note;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  resumedContent(content: string): string {
    if (content.length > 50) {
      return content.substring(0, 50) + '...';
    }
    return content;
  }

  openNote(note: Note) {
    this.router.navigate(['/note-view', note.id]);
  }

}
