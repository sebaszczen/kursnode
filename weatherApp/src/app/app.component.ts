import { SynopticData } from "./models/synopticData";
import { City } from "./models/city";
import { DataProviderService } from "./services/dataprovider.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "weatherApp";

  city: City;
  synopticData: SynopticData;

  constructor(private dataProvider: DataProviderService) {
    document.body.style.backgroundImage = "url(./assets/default.jpg)";
    this.dataProvider.getCityObs().subscribe(city => {
      if (city != null) {
        this.city = city;
        this.synopticData = city.synopticDataDtoList[0];
      }
      this.setBackgroundPicture();
    });
  }

  setBackgroundPicture() {
    if (
      this.synopticData != null &&
      this.synopticData.temperatura < 0 &&
      this.synopticData.suma_opadu > 0
    ) {
      document.body.style.backgroundImage = "url(./assets/snow.jpg)";
      document.body.style.background = "url(./assets/snow.jpg)";
    } else if (
      this.synopticData != null &&
      this.synopticData.temperatura > 0 &&
      this.synopticData.suma_opadu > 0
    ) {
      document.body.style.backgroundImage = "url(./assets/rain.jpg)";
    } else {
      document.body.style.backgroundImage = "url(./assets/default.jpg)";
    }
  }
}
