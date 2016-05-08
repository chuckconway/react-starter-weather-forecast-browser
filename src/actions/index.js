import axios from 'axios';

const API_Key = 'cf37182523e8594f031ce5bf4b36efd4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_Key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
      type: FETCH_WEATHER,
      payload: request
  };
}
