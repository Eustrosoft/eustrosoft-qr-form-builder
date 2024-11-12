import { Routes } from '@angular/router';
import { AppRoutes } from './app.constant';
import { FormConstructorComponent } from './pages/form-constructor/form-constructor.component';
import { FormDisplayComponent } from '@app/pages/form-display/form-display.component';

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
  {
    path: AppRoutes.FORM,
    component: FormDisplayComponent,
  },
];
