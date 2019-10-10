import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatNamePipe } from './format-name.pipe';



@NgModule({
  declarations: [FormatNamePipe],
  imports: [
    CommonModule
  ],
  exports: [
    FormatNamePipe
  ]
})
export class PipesModule { }
