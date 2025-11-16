import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ClasseComponent } from './classe/classe.component';

export const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentComponent },
  { path: 'classes', component: ClasseComponent }
];
