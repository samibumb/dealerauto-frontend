import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CarModel} from '../model/car.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CarService {

  URL = 'http://localhost:8090/vehicles/';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.URL + 'getAll');
  }

  public addCar(body: CarModel): Observable<CarModel> {
    return this.http.post<CarModel>(this.URL + 'create', body);
  }
}
