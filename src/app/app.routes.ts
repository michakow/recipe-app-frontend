import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shell').then((c) => c.ShellComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'recipes',
      },
      {
        path: 'recipes',
        loadChildren: () => import('./recipes').then((r) => r.routes),
      },
      {
        path: 'users',
        loadChildren: () => import('./users').then((r) => r.routes),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
