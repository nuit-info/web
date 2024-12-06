import {Component, OnInit} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {RainOfPictogramsComponent} from "./components/rain-of-pictograms/rain-of-pictograms.component";
import {WeatherIcon} from "./models/weather-icon";
import {COMBINED_WEATHER_ICONS, WEATHER_ICON} from "./app.constant";
import {MeteoService} from "./services/meteo.service";
import {MeteoResponse} from "./models/meteo-response";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, RainOfPictogramsComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  currentIcon!: WeatherIcon | WeatherIcon[];
  density!: number; // Compris entre 1 et 5
  intensity!: number; // Compris entre 1 et 5

  constructor(private meteoService: MeteoService) {}
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
            this.meteoService.getMeteo(latitude, longitude).then((value: MeteoResponse) => this.manageIcon(value));
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

  manageIcon(meteo: MeteoResponse){
    switch (meteo.current.weatherCode){
      case 0:
        this.setClearSky(meteo.current.isDay);
        break;
      case (1 || 2):
        this.setCloudySky(meteo.current.isDay);
        break;
      case 3:
        this.currentIcon = WEATHER_ICON['CLOUDY']
        break;
      case (45 || 48):
        this.currentIcon = WEATHER_ICON['FOG']
        break;
      case (61 || 80):
        this.currentIcon = WEATHER_ICON['RAIN']
        break;
      case (63 || 81):
        this.currentIcon = WEATHER_ICON['RAIN']
        this.density = 2
        this.intensity = 2
        break;
      case (65 || 82):
        this.currentIcon = WEATHER_ICON['RAIN']
        this.density = 3
        this.intensity = 3
        break;
      case (71 || 85):
        this.currentIcon = WEATHER_ICON['SNOWING']
        break;
      case (73 || 85):
        this.currentIcon = WEATHER_ICON['SNOWING']
        this.density = 2
        this.intensity = 2
        break;
      case (75 || 86):
        this.currentIcon = WEATHER_ICON['SNOWING']
        this.density = 3
        this.intensity = 3
        break;
      case (95 || 96 || 99):
        this.currentIcon = WEATHER_ICON['LIGHTNING']
        break;
      default:
        this.setClearSky(meteo.current.isDay);
        break;
    }
  }

  setClearSky(isDay: number){
    if(isDay === 1){
      this.currentIcon = WEATHER_ICON['SUN']
    } else {
      this.currentIcon = WEATHER_ICON['MOON']
    }
  }

  setCloudySky(isDay: number){
    if(isDay === 1){
      this.currentIcon = COMBINED_WEATHER_ICONS['CLOUDY_AND_SUN']
    } else {
      this.currentIcon = COMBINED_WEATHER_ICONS['CLOUDY_AND_MOON']
    }
  }
}
