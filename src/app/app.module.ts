import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarComponent} from './car/car.component';
import {CarService} from './service/car.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HomePageComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{path: '', component:  HomePageComponent},
      {path: 'cars', component: CarComponent} , {path: 'aboutme', component: AboutmeComponent}])
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
