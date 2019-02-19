import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { WeatherDescriptionHeaderComponent } from './weather-description-header/weather-description-header.component';
import { DocumentIconComponent } from './document-icon/document-icon.component';
import { BottomDetailsComponent } from './bottom-details/bottom-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CityListComponent } from './city-list/city-list.component';

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
    CityListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
