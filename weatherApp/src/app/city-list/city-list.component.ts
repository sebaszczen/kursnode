import { DataProviderService } from './../services/dataprovider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: Array<any>;

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit() {
    this.dataProvider.getAll().subscribe(data => {
      this.cities = data;
    });
  }

}
