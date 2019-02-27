import { BehaviorSubject, Subject } from "rxjs";
import { City } from "./../models/city";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataProviderService {
  private city: City;

  private cityObs = new Subject<City>();
  private cityListObs = new BehaviorSubject<Array<City>>([]);

  constructor(private http: HttpClient) {}

  getCityData(cityName: string): void {
    this.http
      .get<City>(`http://localhost:8080/city?name=${cityName}`)
      .subscribe(city => {
        this.city = city;
        this.cityObs.next(this.city);
      });
  }

  getCityObs(): Observable<City> {
    return this.cityObs.asObservable();
  }

  getCityListObs(): Observable<Array<City>>{
    return this.cityListObs.asObservable();
  }
}
