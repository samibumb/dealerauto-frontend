import {Component, OnInit} from '@angular/core';
import {CarService} from '../service/car.service';
import {CarModel} from '../model/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars: CarModel[] = [];
  car = new CarModel();

  constructor(private service: CarService) {}

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

}
