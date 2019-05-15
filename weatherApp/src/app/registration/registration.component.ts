import { UserDto } from "./../models/userDto";
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { nextTick } from "q";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  user: UserDto = new UserDto();

  constructor(private http: HttpClient, private nekst: HttpHandler) {}

  ngOnInit() {}

  register() {
    const user: UserDto = this.user;
    const httpPostOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: true
    };
    this.http
      .post<UserDto>("//localhost:8080/users", this.user, httpPostOptions)
      .subscribe(
        data => console.log('success', data),
        error => console.log('oops', error)
      );

  }
}
