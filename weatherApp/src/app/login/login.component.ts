import { UserDto } from "./../models/userDto";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: UserDto = new UserDto();
  errorMessage: string = "Invalid credentials!";

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  login() {
    this.http
      .post<UserDto>("//localhost:8080/login", this.user, {
        withCredentials: true
      })
      .subscribe(user => {
        alert("User logged successfully.");
      });
  }
}
