import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomTopComponent } from './room-top/room-top.component';
import { MaterialModule } from '../material/material.module';
import { PipeModule } from '../pipes/pipe.module';
import { AppRouterModule } from '../app.router.module';

@NgModule({
  declarations: [
    RoomCreateComponent,
    RoomListComponent,
    RoomDetailComponent,
    RoomTopComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipeModule,
    AppRouterModule
  ],
  exports: [RoomTopComponent]
})
export class RoomModule { }
