import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { MyHttpInterceptor } from './common/http/MyHttpInterceptor';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { routing } from './app.route';
import { AppRoutingModule } from './app-routing.module';
import { LoginGuard } from './common/guard/LoginGuard';
import { LoggedUserService } from './common/security/logged-user.service';
import { MessageErrService } from './common/message-error.service';
import { DisplayMessageComponent } from './common/display-message/display-message.component';
import { DirectiveModule } from './directive/directive.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    DisplayMessageComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    LoginModule,
    AppRoutingModule,
    DirectiveModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }})
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
    LoginGuard,
    LoggedUserService,
    MessageErrService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
