import {Component, OnInit} from '@angular/core';
import {CarService} from '../service/car.service';
import {CarModel} from '../model/car.model';
import 'rxjs/add/operator/toPromise';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {

  cars: CarModel[] = [];
  car = new CarModel();
  id: number;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private service: CarService, private titleService: Title) {
    this.titleService.setTitle('Dealer PREMIUM CARS');
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(cars => {
      this.cars = cars;
    });
  }

  public addCar() {
    this.service.addCar(this.car).subscribe(() => {
      location.reload();
    });
  }

  deleteCar = function(id) {
    if (confirm('Do you really want to buy this car?')) {
      const URL = `${'http://localhost:8090/vehicles/'}`;
      return this.service.deleteCar(URL, id).toPromise().then(() => {
        location.reload();
      });
    }

  };
}

