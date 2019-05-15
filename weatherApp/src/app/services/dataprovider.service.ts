import { BehaviorSubject, Subject } from "rxjs";
import { City } from "./../models/city";
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataProviderService {
  private city: City;

  private cityObs = new Subject<City>();
  private cityListObs = new BehaviorSubject<Array<City>>([]);
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.set("Content-Type", "application/json");
    this.headers = this.headers.set("Accept", "application/json");
  }

  getCityData(cityName: string): void {
    this.http
      .get<City>(`//localhost:8080/cities/${cityName}`, {
        withCredentials: true
      })
      .subscribe(
        city => {
          this.city = city;
          this.cityObs.next(this.city);
        },
        // (error: HttpErrorResponse) => {
        //   console.log("blad: " + error.status);
        // }
      );
  }

  getCityObs(): Observable<City> {
    return this.cityObs.asObservable();
  }

  getCityListObs(): Observable<Array<City>> {
    return this.cityListObs.asObservable();
  }
}
