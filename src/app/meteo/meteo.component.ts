import {Component, OnInit} from '@angular/core';
import {MapsModule} from "@syncfusion/ej2-angular-maps";
import { world_map } from './world-map';
import { registerLicense } from '@syncfusion/ej2-base';
import { ZoomService, MarkerService, SelectionService  } from '@syncfusion/ej2-angular-maps'
import { fetchWeatherApi } from 'openmeteo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [
    MapsModule,CommonModule
  ],
  providers: [ZoomService, MarkerService, SelectionService],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class MeteoComponent implements OnInit{
  public shapeData: object = world_map;
  public zoomSettings?: object;
  public markerSettings?: object;
  public openSideBar: boolean =false;

  ngOnInit(): void {
    this.zoomSettings = {
      enable: true,
      toolbars: ['ZoomIn', 'ZoomOut', 'Pan', 'Reset']
    };
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
        { latitude: 35.777202 , longitude: -69.545593 },
        { latitude: 42.165376 , longitude: -134.233093 },
      ],
      animationDuration: 0,
    }]
    this.shapeData = world_map;
  }

  constructor() {
    registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF1cX2hIYVdpR2Nbek5zflROal1TVBYiSV9jS3pSdEVmWHpfeHVWR2haWQ==');
  }

  async onMarkerClick(args: any) {
    console.log(args);
    this.openSideBar = true;

    const params = {
      "latitude": args.data.latitude,
      "longitude": args.data.longitude,
      "current": ["temperature_2m", "precipitation", "wind_speed_10m", "wind_direction_10m"]
    };

    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const current = response.current()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature2m: current.variables(0)!.value(),
        precipitation: current.variables(1)!.value(),
        windSpeed10m: current.variables(2)!.value(),
        windDirection10m: current.variables(3)!.value(),
      },

    };
    console.log(weatherData);

  }
}