import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../shared/material/material.module";
import {PeopleComponent} from "./people.component";
import {PeopleRoutingModule} from "./people-routing.module";



@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MaterialModule
  ]
})
export class PeopleModule { }
