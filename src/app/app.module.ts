import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from "./pages/home/home.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { StarshipsComponent } from './pages/starships/starships.component';
import {MatCardModule} from "@angular/material/card";
import { PeopleComponent } from './pages/people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    PeopleComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        BrowserAnimationsModule,
        HomeModule,
        HttpClientModule,
        MatCardModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
