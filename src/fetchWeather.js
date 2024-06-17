export { runFetchForecast };

import { render } from './renderPage';

//cache DOM

//bind events

//functions
function runFetchForecast(city) {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=274242f3ac294cf0a8d22912240906&q=${city}&days=3`,
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);

      const weatherData = {};
      weatherData.city = response.location.name;
      weatherData.country = response.location.country;
      weatherData.time = response.location.localtime;
      weatherData.conditionToday =
        response.forecast.forecastday[0].day.condition.text;
      weatherData.temperatureCelsius = response.current.temp_c;
      weatherData.temperatureFahrenheit = response.current.temp_f;
      weatherData.humidity = response.current.humidity;
      weatherData.windKph = response.current.wind_kph;
      weatherData.windMph = response.current.wind_mph;
      weatherData.uvIndex = response.current.uv;
      weatherData.forecast0condition =
        response.forecast.forecastday[0].day.condition.icon;
      weatherData.forecast0maxC =
        response.forecast.forecastday[0].day.maxtemp_c;
      weatherData.forecast0maxF =
        response.forecast.forecastday[0].day.maxtemp_f;
      weatherData.forecast0minC =
        response.forecast.forecastday[0].day.mintemp_c;
      weatherData.forecast0minF =
        response.forecast.forecastday[0].day.mintemp_f;
      weatherData.forecast1condition =
        response.forecast.forecastday[1].day.condition.icon;
      weatherData.forecast1maxC =
        response.forecast.forecastday[1].day.maxtemp_c;
      weatherData.forecast1maxF =
        response.forecast.forecastday[1].day.maxtemp_f;
      weatherData.forecast1minC =
        response.forecast.forecastday[1].day.mintemp_c;
      weatherData.forecast1minF =
        response.forecast.forecastday[1].day.mintemp_f;
      weatherData.forecast2condition =
        response.forecast.forecastday[2].day.condition.icon;
      weatherData.forecast2maxC =
        response.forecast.forecastday[2].day.maxtemp_c;
      weatherData.forecast2maxF =
        response.forecast.forecastday[2].day.maxtemp_f;
      weatherData.forecast2minC =
        response.forecast.forecastday[2].day.mintemp_c;
      weatherData.forecast2minF =
        response.forecast.forecastday[2].day.mintemp_f;

      console.log(weatherData);

      render(weatherData);
    })
    .catch(function (error) {
      console.log('Error: ' + error);
    });
}
