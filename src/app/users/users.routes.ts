import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('.').then((c) => c.UsersShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components').then((c) => c.UserListComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
