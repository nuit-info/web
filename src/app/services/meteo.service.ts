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
      "current": ["temperature_2m", "is_day", "precipitation", "weather_code", "wind_speed_10m"],
	    "hourly": ["temperature_2m", "rain", "weather_code", "wind_speed_10m"]
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    return this.formatData(responses)
  }

  formatData(responses: any): MeteoResponse{
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
    const hourly = response.hourly()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature2m: current.variables(0)!.value(),
        isDay: current.variables(1)!.value(),
        precipitation: current.variables(2)!.value(),
        weatherCode: current.variables(3)!.value(),
        windSpeed10m: current.variables(4)!.value(),
      },
      hourly: {
        time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        temperature2m: hourly.variables(0)!.valuesArray()!,
        rain: hourly.variables(1)!.valuesArray()!,
        weatherCode: hourly.variables(2)!.valuesArray()!,
        windSpeed10m: hourly.variables(3)!.valuesArray()!,
      },

    };

    // `weatherData` now contains a simple structure with arrays for datetime and weather data
    for (let i = 0; i < weatherData.hourly.time.length; i++) {
      console.log(
        weatherData.hourly.time[i].toISOString(),
        weatherData.hourly.temperature2m[i],
        weatherData.hourly.rain[i],
        weatherData.hourly.weatherCode[i],
        weatherData.hourly.windSpeed10m[i]
      );
    }
    return weatherData;
  }
}




