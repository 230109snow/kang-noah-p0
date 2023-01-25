import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apikey, apiroot } from 'src/weather-apikey';
import { WeatherApiData } from './models/weatherapi-model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

// helper service class for making the API calls
export class WeatherApiService implements OnInit, OnDestroy{
  constructor(private http: HttpClient) { }

  getWeatherForecast(location : string, days : number) : Observable<WeatherApiData> {
    const url = `${apiroot}/forecast.json?key=${apikey}&q=${location}&days=${days}`;
    return this.http.get<WeatherApiData>(url, {});
  }
  
  ngOnInit(): void {
      
  }

  ngOnDestroy() : void{

  }

}
