import {Component, OnInit} from '@angular/core';
import {MapsModule} from "@syncfusion/ej2-angular-maps";
import { world_map } from './world-map';
import { registerLicense } from '@syncfusion/ej2-base';
import { MarkerService, SelectionService  } from '@syncfusion/ej2-angular-maps'
import { fetchWeatherApi } from 'openmeteo';
import { CommonModule } from '@angular/common';
import {SideBarMeteoComponent} from "../side-bar-meteo/side-bar-meteo.component";
import {MeteoService} from "../services/meteo.service";
import {WeatherIconService} from "../services/weather-icon.service";


@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [
    MapsModule, CommonModule, SideBarMeteoComponent
  ],
  providers: [ MarkerService, SelectionService],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class MeteoComponent implements OnInit{
  public shapeData: object = world_map;
  public zoomSettings?: object;
  public markerSettings?: object;
  public openSideBar: boolean =false;
  public data: any;
  public background: string = '#006994';
  public selected_tempo: string = "current";

  ngOnInit(): void {
    this.markerSettings = [{
      visible: true,
      selectionSettings: {
        enable: true,
        fill: 'lightblue',
        border: { color: 'white', width: 2}
      },
      shapeValuePath:'shape',
      colorValuePath:'color',
      shape: 'Triangle',
      fill: 'blue',
      height: 20,
      width: 20,
      dataSource: [
        { latitude: 48.085731 , longitude: -11.53778 },
        { latitude: -1.685191 , longitude: 0.88032 },
        { latitude: 17.153955 , longitude: 63.810007 },
        { latitude: 9.578224  , longitude: 89.47407 },
        { latitude: -31.641657  , longitude: 104.591257 },
        { latitude: -35.210439  , longitude: 37.794382 },
        { latitude: 35.777202 , longitude: -69.545593 },
        { latitude: 58.577341 , longitude: -31.111868 },
        { latitude: 25.389543 , longitude: 131.134226 },
        { latitude: -23.980409 , longitude: -85.428274 },
        { latitude: -22.364496 , longitude: 78.575632 },
        { latitude: 72.470576 , longitude: 3.868601 },
        { latitude: 42.165376 , longitude: -134.233093 }
      ],
      animationDuration: 0,
    }]
    this.shapeData = world_map;
  }

  constructor(private meteoService: MeteoService, protected weatherIconService: WeatherIconService) {}

  async onMarkerClick(args: any) {
    this.openSideBar = !this.openSideBar;

    this.meteoService.getMeteo(args.data.latitude, args.data.longitude, ).then(value => {
      this.data = value
      this.weatherIconService.manageIcon(value)
      console.log(value)
    })

  }

  protected readonly close = close;

  closeSidebar() {
    this.openSideBar = false;
  }
}
