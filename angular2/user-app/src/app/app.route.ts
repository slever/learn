import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { GetUserComponent } from './users/get-user/get-user.component';
import { MenuUserComponent } from './users/menu-user/menu-user.component';
import { FailLoginComponent } from './login/fail-login/fail-login.component';

/**
 * THis is an option for declaring routes globaly for the app
 */

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/failLogin', component: FailLoginComponent },
  { path: 'menuUser', component: MenuUserComponent },
  { path: 'menuUser/listUsers', component: ListUsersComponent },
  { path: 'menuUser/searchUser', component: GetUserComponent },
  { path: '**', redirectTo: '/login'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash : true});
