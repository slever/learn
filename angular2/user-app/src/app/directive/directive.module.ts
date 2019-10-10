import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasNameDirective } from './has-name.directive';



@NgModule({
  declarations: [HasNameDirective],
  imports: [
    CommonModule
  ],
  exports: [HasNameDirective]
})
export class DirectiveModule { }
