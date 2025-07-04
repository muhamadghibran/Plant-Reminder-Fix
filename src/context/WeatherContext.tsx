import React, { useEffect, useState, createContext, useContext } from 'react';
import { fetchWeatherByCoords } from '../services/weatherService';
import { WeatherData } from '../types/weather';

const WeatherContext = createContext<any>(null);

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherCondition, setCondition] = useState<'sunny' | 'rainy' | 'cloudy' | 'windy' | 'clear'>('clear');

  useEffect(() => {
    const getWeatherData = async (lat: number, lon: number) => {
      try {
        const data = await fetchWeatherByCoords(lat, lon);
        const main = data.weather[0].main.toLowerCase();
        const mappedCondition = mapCondition(main);

        setWeather({
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          condition: mappedCondition,
          humidity: data.main.humidity,
          location: `${data.name}, ${data.sys.country}`,
          lastUpdated: new Date().toISOString(),
        });

        setCondition(mappedCondition);
      } catch (err) {
        console.error('Error fetching weather data:', err);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeatherData(latitude, longitude);
        },
        (error) => {
          console.error('Geolocation error:', error);
          // fallback ke Jakarta
          getWeatherData(-6.2, 106.8);
        }
      );
    } else {
      // jika geolocation tidak tersedia
      getWeatherData(-6.2, 106.8);
    }
  }, []);

  const mapCondition = (main: string): 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'clear' => {
    switch (main) {
      case 'clear':
        return 'sunny';
      case 'clouds':
        return 'cloudy';
      case 'rain':
      case 'drizzle':
      case 'thunderstorm':
        return 'rainy';
      case 'snow':
      case 'mist':
      case 'fog':
      case 'haze':
        return 'windy';
      default:
        return 'clear';
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, weatherCondition }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
