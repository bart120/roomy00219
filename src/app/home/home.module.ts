import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [DashboardComponent, NotfoundComponent],
  imports: [
    CommonModule,

  ]
})
export class HomeModule { }
