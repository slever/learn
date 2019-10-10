import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { GetUserComponent } from './get-user/get-user.component';
import { UsersService } from './users.service';
import {HttpClientModule} from '@angular/common/http';
import { FormatNamePipe } from '../common/pipes/format-name.pipe';
import { PipesModule } from '../common/pipes/pipes.module';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { RouterModule } from '@angular/router';
import { userRouting } from './users.route';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ListUsersComponent, GetUserComponent, MenuUserComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PipesModule,
    RouterModule,
    userRouting,
    TranslateModule
  ],
  providers: [UsersService]
  /*,
  exports: [
    ListUsersComponent,
    GetUserComponent,
    MenuUserComponent
  ]*/
})
export class UsersModule { }
