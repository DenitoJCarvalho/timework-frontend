import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { WorksheetComponent } from './pages/worksheet/worksheet.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'worksheet', component: WorksheetComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }

];
