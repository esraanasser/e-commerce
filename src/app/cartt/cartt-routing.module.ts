import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarttComponent } from './cartt.component';

const routes: Routes = [{ path: '', component: CarttComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarttRoutingModule { }
