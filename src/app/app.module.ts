import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';

import {
  HomeComponent,
  ConnectionComponent,
  PokechonHomeComponent  } from './views';

import {
  NavbarComponent,
  SidenavComponent,
  DynamicComponentComponent,
  GaugeComponent,
  RegisterComponent,
  LoginComponent,
  CallMapComponent,
  AnimatedCallComponent
} from './components';

import {
  FullscreenService,
  CoordinatesConverterService,
  SocketConnectionService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent,
    DynamicComponentComponent,
    PokechonHomeComponent,
    GaugeComponent,
    RegisterComponent,
    LoginComponent,
    ConnectionComponent,
    CallMapComponent,
    AnimatedCallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    FullscreenService,
    {provide: APP_BASE_HREF, useValue: '/ng'},
    CoordinatesConverterService,
    SocketConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
