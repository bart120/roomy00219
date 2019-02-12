import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatSidenavModule, MatMenuModule, MatButtonModule, MatIconModule,
  MatGridListModule, MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
