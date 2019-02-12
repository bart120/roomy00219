import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { AppRouterModule } from '../app.router.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class ControlsModule { }
