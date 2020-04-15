import { NgModule } from '@angular/core';
import {PlanComponent} from './plan.component';
import {CommonModule} from '@angular/common';
import {ZoomService} from '../zoom.service';

@NgModule({
  declarations: [
    PlanComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ZoomService],
  exports: [
    PlanComponent
  ]
})
export class PlanModule { }
