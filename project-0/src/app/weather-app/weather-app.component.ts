import { Component, OnDestroy, OnInit} from '@angular/core';
import { apikey, apiroot } from 'src/weather-apikey'
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})

export class WeatherAppComponent implements OnInit, OnDestroy{
  constructor(private weatherapi : WeatherApiService) {}

  returnJSON : any[] = [];

  validation = {
    required: true,
    min : 1,
    max : 14
  }

  getWeatherForcast(city: string, days: number){
    this.weatherapi.getWeatherForcast(city, days).subscribe((data : any) => {

      this.returnJSON = data.forecast;
      console.log(JSON.stringify(this.returnJSON, null, 2 ));
      
      


    })
  }
  

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      
  }
}
