import { Routes } from '@angular/router';
import { HeaderComponent } from './shell';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    title: 'Lista przepisów',
    component: HeaderComponent,
  },
  {
    path: '**',
    redirectTo: 'recipes',
  },
];
