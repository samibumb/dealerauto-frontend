import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarComponent} from './car/car.component';
import {AboutMeComponent} from './aboutme/aboutme.component'

const routes: Routes = [
  { path: 'cars', component: CarComponent }
  {path: 'aboutMe', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
