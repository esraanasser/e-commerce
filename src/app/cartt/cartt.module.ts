import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarttRoutingModule } from './cartt-routing.module';
import { CarttComponent } from './cartt.component';
import { FilterproductsPipe } from './filterproducts.pipe';


@NgModule({
  declarations: [
    CarttComponent,
    FilterproductsPipe
  ],
  imports: [
    CommonModule,
    CarttRoutingModule
  ]
})
export class CarttModule { }
