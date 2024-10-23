import { Routes } from '@angular/router';
import { AppRoutes } from './app.constants';
import { FormConstructorComponent } from './pages/form-constructor/form-constructor.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.CONSTRUCTOR,
  },
  {
    path: AppRoutes.CONSTRUCTOR,
    component: FormConstructorComponent,
  },
];
