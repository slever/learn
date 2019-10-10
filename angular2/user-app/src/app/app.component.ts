import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'usr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-app';

  constructor(private translateService: TranslateService){
    translateService.setDefaultLang('fr');
    translateService.use('fr');
  }
}
