const API_KEY = '5d3c51a8f86f7221403ae6495492cd17';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeatherByCoords(lat: number, lon: number): Promise<any> {
  const res = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return res.json();
}
