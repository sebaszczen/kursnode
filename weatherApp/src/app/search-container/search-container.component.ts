import { DataProviderService } from './../services/dataprovider.service';
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search-container",
  templateUrl: "./search-container.component.html",
  styleUrls: ["./search-container.component.css"]
})
export class SearchContainerComponent implements OnInit {
  cityName: string;

  search() {
    this.dataProvider.getCityData(this.cityName);
  }

  constructor(private dataProvider: DataProviderService) {}

  ngOnInit() {
  }
}
