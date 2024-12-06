import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CaptchaComponent} from "./captcha/captcha.component";
import {RainOfPictogramsComponent} from "./components/rain-of-pictograms/rain-of-pictograms.component";
import {WeatherIcon} from "./models/weather-icon";
import {WEATHER_ICON} from "./app.constant";
import {registerLicense} from "@syncfusion/ej2-base";
import {fetchWeatherApi} from "openmeteo";
import {MeteoService} from "./services/meteo.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CaptchaComponent, RainOfPictogramsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  currentIcon!: WeatherIcon | WeatherIcon[];
  density!: number; // Compris entre 1 et 5
  intensity!: number; // Compris entre 1 et 5

  constructor(private meteoService: MeteoService) {
    this.currentIcon = WEATHER_ICON['CLOUDY'];
    this.density = 1;
    this.intensity = 3;
  }
  ngOnInit(): void {
    this.getUserLocationAndFetchWeather()
  }

  async getUserLocationAndFetchWeather() {
    try {
      // Vérifier si la géolocalisation est disponible
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            // Récupérer la latitude et la longitude
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            // Appeler la fonction pour récupérer la météo
            this.meteoService.getMeteo(latitude, longitude).then(value => console.log(value));
          },
          (error) => {
            console.error("Erreur de géolocalisation : ", error);
          }
        );
      } else {
        console.error("Géolocalisation non supportée");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de la position", error);
    }
  }
}
