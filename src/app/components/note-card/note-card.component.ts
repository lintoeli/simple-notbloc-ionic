import { Component, Input, OnInit } from '@angular/core';
import { IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonIcon, IonButton, IonImg } from "@ionic/angular/standalone";
import { Note } from 'src/app/models/note';

@Component({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  imports: [IonImg, IonButton, IonIcon, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle],
})
export class NoteCardComponent  implements OnInit {

  @Input() note?: Note;

  constructor() { }

  ngOnInit() {

  }

  resumedContent(content: string): string {
    if (content.length > 50) {
      return content.substring(0, 50) + '...';
    }
    return content;
  }

}
