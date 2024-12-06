export interface MeteoResponse {
  current: {
    time: Date;
    temperature2m: number;
    precipitation: number;
    windSpeed10m: number;
    isDay: number;  
    weatherCode: number;
  },
  hourly?: {
    time: Date[];
    temperature2m: number;
    rain: number;
    windSpeed10m: number;
    weatherCode: number;
  },
}
