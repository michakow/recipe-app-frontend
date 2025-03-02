import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('.').then((c) => c.RecipesShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components').then((c) => c.RecipeListComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
