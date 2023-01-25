import { Component, OnDestroy, OnInit} from '@angular/core';
import { apikey, apiroot } from 'src/weather-apikey'
import { WeatherApiData } from '../models/weatherapi-model';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})

export class WeatherAppComponent implements OnInit, OnDestroy{
  constructor(private weatherApi : WeatherApiService) {}

  validation = {
    required: true,
    min : 1,
    max : 14
  }

  cityName! : string;
  numDays! : number;
  weatherData? : WeatherApiData;

  submitInput(){
    this.getWeatherForecast(this.cityName, this.numDays);
  }

  private getWeatherForecast(city: string, days: number){
    this.weatherApi.getWeatherForecast(city, days).subscribe({
      next:(res) =>{
      this.weatherData = res;
    }})
  }
  

  ngOnInit(): void {
    /* test code - set default to Seattle, 10 days */
    // this.weatherApi.getWeatherForcast('Seattle', 10).subscribe({
    //   next: (res) => {
    //     this.weatherData = res;
    //     console.log(res);
    //   }
    // })
  }

  ngOnDestroy(): void {
      
  }
}
