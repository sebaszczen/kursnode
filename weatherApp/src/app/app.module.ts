import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchContainerComponent } from "./search-container/search-container.component";
import { WeatherContainerComponent } from "./weather-container/weather-container.component";
import { WeatherMainComponent } from "./weather-main/weather-main.component";
import { TemperatureComponent } from "./temperature/temperature.component";
import { WeatherDescriptionHeaderComponent } from "./weather-description-header/weather-description-header.component";
import { DocumentIconComponent } from "./document-icon/document-icon.component";
import { BottomDetailsComponent } from "./bottom-details/bottom-details.component";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { CityListComponent } from "./city-list/city-list.component";
import { AuthorizationComponent } from "./authorization/authorization.component";
import { RouterModule } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent } from './error/error.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    WeatherContainerComponent,
    WeatherMainComponent,
    TemperatureComponent,
    WeatherDescriptionHeaderComponent,
    DocumentIconComponent,
    BottomDetailsComponent,
    CityListComponent,
    AuthorizationComponent,
    RegistrationComponent,
    LoginComponent,
    ErrorComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: "XSRF-TOKEN",
      headerName: "X-XSRF-TOKEN"
    }),
    FormsModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   { path: "registration", component: RegistrationComponent },
    //   { path: "login", component: LoginComponent }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
