import { Injectable } from '@angular/core';
import {MeteoResponse} from "../models/meteo-response";
import {COMBINED_WEATHER_ICONS, WEATHER_ICON} from "../app.constant";

@Injectable({
  providedIn: 'root',
})
export class WeatherIconService {
  currentIcon!: any;
  density!: number; // Compris entre 1 et 5
  intensity!: number; // Compris entre 1 et 5

  setIcon(value: any) {
    this.currentIcon = value;
  }

  getIcon() {
    return this.currentIcon;
  }

  setIntensity(value: number) {
    this.intensity = value;
  }

  getIntensity(){
    return this.intensity;
  }

  setDensity(value: number){
    this.density = value;
  }

  getDensity(){
    return this.density;
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
