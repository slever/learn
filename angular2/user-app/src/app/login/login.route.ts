import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FailLoginComponent } from './fail-login/fail-login.component';

export const loginRoutes: Routes = [
  {
      path: 'login',
      children: [
           {path: '', component: LoginComponent },
           {path: 'failLogin', component: FailLoginComponent }
      ]
  }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);
