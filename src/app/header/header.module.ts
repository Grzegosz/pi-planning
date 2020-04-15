import { NgModule } from '@angular/core';
import {HeaderComponent} from './header.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    NgSelectModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
