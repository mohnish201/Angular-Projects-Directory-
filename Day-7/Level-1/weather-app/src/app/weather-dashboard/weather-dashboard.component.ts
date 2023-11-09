import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css'],
})
export class WeatherDashboardComponent implements OnInit {
  currentCity = ""
  image='clear'  
  imagePath = `./images/clouds.png`
  city: string = '';
  CurrentDate: Date = new Date();
  daysOfWeek: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  weather: any = {};

  day: string = this.daysOfWeek[this.CurrentDate.getDay()];
  time: number = this.CurrentDate.getHours();
  userLocation: { latitude: number; longitude: number } | null = null;

  constructor(
    private http: HttpClient,
    private weatherService: WeatherService
  ) {
    
  }

  ngOnInit(): void {
    this.weatherService.getLocation().subscribe(
      (location) => {
        this.userLocation = location;
        console.log(this.userLocation);
        this.weatherService
          .getCurrentLocation(
            this.userLocation?.latitude,
            this.userLocation?.longitude
          )
          .subscribe(
            (data) => {
              if (data && data.name) {
                console.log(data); 
               this.currentCity = data.name// Access the city name
               this.weather = data
                this.getImage(this.weather)
              } else {
                console.log("City name not found in the response");
              }
            },
            (error) => {
              console.error("Error fetching current location:", error);
            }
          );
      },
      (error) => {
        console.error("Error fetching user location:", error);
      }
    );
  }
  
  getImage(data:any){
    const weatherDescription = data.weather[0]?.description.toLowerCase();

    if (weatherDescription.includes("clouds")) {
      this.image = "clouds";
    } else if(weatherDescription.includes("sun")){
      this.image = "sun";
    }
    else if(weatherDescription.includes("rain")){
     this.image = "rain"
    }
    else if(weatherDescription.includes("sky")){
      this.image = "sky"
     }
    else if(weatherDescription.includes("haze")){
     this.image = "haze"
    }
    else if(weatherDescription.includes("smoke")){
     this.image = "smoke"
    }
    else{
     this.image = "none"
    }
    console.log(this.image)
   }
   

  OnClick() {
  
    this.weatherService.getLocationByInput(this.city).subscribe((data) => {
      console.log(data);
      this.weather=data;
      this.getImage(this.weather)
    });
    this.currentCity = this.city
  }

  onCityInputChange(cityValue: string) {
    this.city = cityValue
  }
    
}
