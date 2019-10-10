import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { GetUserComponent } from './get-user/get-user.component';
import { LoginGuard } from '../common/guard/LoginGuard';

export const userRoutes: Routes = [
  {
      path: 'menuUser',
      children: [
           {path: '', component: MenuUserComponent , canActivate: [LoginGuard]},
           {path: 'listUsers', component: ListUsersComponent , canActivate: [LoginGuard]},
           {path: 'searchUser', component: GetUserComponent , canActivate: [LoginGuard]}
      ]
  }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);
