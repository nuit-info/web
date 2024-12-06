export interface MeteoResponse {
  current: {
    time: Date;
    temperature2m: number;
    precipitation: number;
    windSpeed10m: number;
    windDirection10m: number;
  },
}
