export interface WeatherData {
  temperature: number;
  description: string;
  condition: 'clear' | 'cloudy' | 'rainy' | 'windy' | 'sunny';
  humidity: number;
  location: string;
  lastUpdated: string;
}

export enum WeatherCondition {
  Clear = 'clear',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
  Windy = 'windy',
  Sunny = 'sunny',
}