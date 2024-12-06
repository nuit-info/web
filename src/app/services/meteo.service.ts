import { Injectable } from '@angular/core';
import {registerLicense} from "@syncfusion/ej2-base";
import {fetchWeatherApi} from "openmeteo";
import {MeteoResponse} from "../models/meteo-response";

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor() {
    registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF1cX2hIYVdpR2Nbek5zflROal1TVBYiSV9jS3pSdEVmWHpfeHVWR2haWQ==');
  }

  async getMeteo(latitude: number, longitude: number): Promise<MeteoResponse> {
    const params = {
      "latitude": latitude,
      "longitude": longitude,
      "current": ["temperature_2m", "precipitation", "wind_speed_10m", "wind_direction_10m"]
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    return this.formatData(responses)
  }

  formatData(responses: any): MeteoResponse{
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
    console.log(current)
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
    return weatherData
  }
}
