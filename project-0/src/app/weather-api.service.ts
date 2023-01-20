import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apikey, apiroot } from 'src/weather-apikey';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  constructor(private http: HttpClient) { }

  getWeatherForcast(location : string, days : number){
    const url = `${apiroot}/forecast.json?key=${apikey}&q=${location}&days=${days}`;
    return this.http.get(url, {});
  }

}
