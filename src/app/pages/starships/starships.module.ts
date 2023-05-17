import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../shared/material/material.module";
import {StarshipsComponent} from "./starships.component";
import {StarshipsRoutingModule} from "./starships-routing.module";



@NgModule({
  declarations: [
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    MaterialModule
  ]
})
export class StarshipsModule { }
