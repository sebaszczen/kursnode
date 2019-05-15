import { SynopticData } from './../models/synopticData';
import { City } from './../models/city';
import { DataProviderService } from './../services/dataprovider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements OnInit {

  city: City;
  synopticDataList:Array<SynopticData>;
  temperature: number;
  windSpeed: number;
  humidity: number;
  pressure: number;
  rainfall: number;
  measurementDate: Date;
  countAverageTemperature(): void{
    let temperatura=0;
    let temperatureMesurement=0;
    let sumaOpadu=0;
    let sumaOpaduMeasurement=0;
    let windSpeed=0;
    let windSpeedMeasurement=0;
    let humidity=0;
    let humidityMeasurement=0;
    this.synopticDataList.forEach(synopticData=>{
      temperatura+=synopticData.temperatura;
      temperatureMesurement+= synopticData.temperatura!=0?1:0;
      sumaOpadu+=synopticData.suma_opadu;
      sumaOpaduMeasurement+=synopticData.suma_opadu!=0?1:0;
      windSpeed+=synopticData.predkosc_wiatru;
      windSpeedMeasurement+=synopticData.predkosc_wiatru!=0?1:0;
      humidity+=synopticData.wilgotnosc_wzgledna;
      humidityMeasurement+=synopticData.wilgotnosc_wzgledna!=0?1:0;
      this.pressure=Math.round(synopticData.cisnienie);
    });
    this.temperature=temperatura/temperatureMesurement;
    this.rainfall=Math.round(sumaOpadu/sumaOpaduMeasurement);
    this.windSpeed=windSpeed/windSpeedMeasurement;
    this.humidity=humidity/humidityMeasurement;
    this.measurementDate=this.synopticDataList[0].data_pomiaru;
  }

  constructor(dataProviderService: DataProviderService) {
    dataProviderService.getCityObs().subscribe(city=>{
      this.city=city;
      this.synopticDataList=city.synopticDataDtoList;
      this.countAverageTemperature();
      this.showWeatherInfo();
    });
   }

   showWeatherInfo(){
     let weatherContainer=document.getElementById('weatherDescription');
     let weatherContainerWidth=weatherContainer.clientWidth;
     let weatherContainerHeight=weatherContainer.clientHeight;
     console.log(weatherContainerHeight);
     weatherContainer.style.left=`calc(50% - ${weatherContainerWidth/2}px)`;
     weatherContainer.style.top=`calc(50% - ${weatherContainerHeight/1.3}px)`;
     weatherContainer.style.visibility='visible';
   }

  ngOnInit() {
  }

}
