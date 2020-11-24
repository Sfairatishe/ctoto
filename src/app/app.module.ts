import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {charaComponent} from  './chara/chara.component';
import { NavbarComponent } from './navbar/navbar.component';
import {signUpFormComponent } from './signUpForm/signUpForm.component';


@NgModule({
  declarations: [
    AppComponent,
    charaComponent,
    NavbarComponent,
    signUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
