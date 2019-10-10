import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FailLoginComponent } from './fail-login/fail-login.component';
import { RouterModule } from '@angular/router';
import { loginRouting } from './login.route';
import { ConnectedUserComponent } from './connected-user/connected-user.component';
import { DirectiveModule } from '../directive/directive.module';
import { IonicModule, IonCard } from '@ionic/angular';

@NgModule({
  declarations: [LoginComponent, FailLoginComponent, ConnectedUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    loginRouting,
    DirectiveModule,
    IonicModule
  ],
  providers: [IonCard]
  ,
  exports: [
    ConnectedUserComponent
    /*LoginComponent,
    FailLoginComponent*/
  ]
})
export class LoginModule { }
