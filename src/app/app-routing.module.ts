import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PlanComponent} from './plan/plan.component';

const appRoutes: Routes = [
  { path: '**', component: PlanComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ]
})
export class AppRoutingModule { }
