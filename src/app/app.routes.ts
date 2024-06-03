import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent),
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register-user/register-user.component').then(c => c.RegisterUserComponent),
    pathMatch: 'full'
  },
  {
    path: 'worksheet',
    loadComponent: () => import('./pages/worksheet/worksheet.component').then(c => c.WorksheetComponent),
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent),
    pathMatch: 'full'
  }

];
