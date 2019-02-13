import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxModelModule } from 'ngx-model';

import { AppComponent } from './app.component';
import { ControlsModule } from './controls/controls.module';
import { RoomModule } from './room/room.module';
import { AppRouterModule } from './app.router.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxModelModule,
    ControlsModule,
    RoomModule,
    HomeModule,
    AuthenticationModule,
    HttpClientModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
