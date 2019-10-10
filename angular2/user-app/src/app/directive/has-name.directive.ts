import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { LoggedUserService } from '../common/security/logged-user.service';

@Directive({
  selector: '[usrHasName]'
})
export class HasNameDirective {

  constructor(private viewContainer: ViewContainerRef,
              private templateRef: TemplateRef<{}>,
              private userLoggedService: LoggedUserService) { }

  @Input() set usrHasName(name: string) {
    if (this.userLoggedService.getUser() &&
      this.userLoggedService.getUser().lastName === name) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }


}
