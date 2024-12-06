import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {RainOfPictogramsComponent} from "./components/rain-of-pictograms/rain-of-pictograms.component";
import {WeatherIcon} from "./models/weather-icon";
import {WEATHER_ICON} from "./app.constant";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, RainOfPictogramsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentIcon!: WeatherIcon | WeatherIcon[];
  density!: number; // Compris entre 1 et 5
  intensity!: number; // Compris entre 1 et 5

  constructor() {
    this.currentIcon = WEATHER_ICON['CLOUDY'];
    this.density = 1;
    this.intensity = 3;
  }
}
