import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getLocation(): Observable<{ latitude: number; longitude: number }> {
    return new Observable((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error('Geolocation is not supported by browser.');
      }
    });
  }

  getCurrentLocation(latitude: number, longitude: number):Observable<CurrentCity> {
    return this.http.get<CurrentCity>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dbd0bda333f7dad76148f509b213acad&units=metric`
    );
  }

  getLocationByInput(city:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dbd0bda333f7dad76148f509b213acad&units=metric`)
  }
}

export interface CurrentCity{
   name:string
}