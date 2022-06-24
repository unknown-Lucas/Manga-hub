import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadDirective } from './directives/lazyload.directive';



@NgModule({
  declarations: [
    LazyloadDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
