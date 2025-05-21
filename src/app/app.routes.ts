import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'note-view/:id',
    loadComponent: () => import('./components/note-view/note-view.page').then( m => m.NoteViewPage)
  },
];
