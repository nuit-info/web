import {Component, OnInit} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {RainOfPictogramsComponent} from "./components/rain-of-pictograms/rain-of-pictograms.component";
import {WeatherIcon} from "./models/weather-icon";
import {COMBINED_WEATHER_ICONS, WEATHER_ICON} from "./app.constant";
import {MeteoService} from "./services/meteo.service";
import {MeteoResponse} from "./models/meteo-response";
import {WeatherIconService} from "./services/weather-icon.service";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, RainOfPictogramsComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private meteoService: MeteoService, protected weatherIconService: WeatherIconService) {}
  ngOnInit(): void {
    this.getUserLocationAndFetchWeather();
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
            this.meteoService.getMeteo(latitude, longitude).then((value: MeteoResponse) => this.weatherIconService.manageIcon(value));
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
