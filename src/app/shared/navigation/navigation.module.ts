import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {NavigationComponent} from "./navigation.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink
  ]
})
export class NavigationModule { }
