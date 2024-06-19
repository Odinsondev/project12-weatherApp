export { runFetchForecast };

import { renderCelsius } from './renderPageC';
import { renderFahrenheit } from './renderPageF';

//functions
function runFetchForecast(city, units) {
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
      weatherData.today = {};
      weatherData.today.city = response.location.name;
      weatherData.today.country = response.location.country;
      weatherData.today.time = response.location.localtime;
      weatherData.today.condition = response.current.condition.text;
      weatherData.today.conditionImg = response.current.condition.icon;
      weatherData.today.temperatureCelsius = response.current.temp_c;
      weatherData.today.temperatureFahrenheit = response.current.temp_f;
      weatherData.today.humidity = response.current.humidity;
      weatherData.today.windKph = response.current.wind_kph;
      weatherData.today.uvIndex = response.current.uv;
      weatherData.today.feelsLikeC = response.current.feelslike_c;
      weatherData.today.feelsLikeF = response.current.feelslike_f;
      weatherData.dailyForecast = {};
      weatherData.dailyForecast.forecast0condition =
        response.forecast.forecastday[0].day.condition.icon;
      weatherData.dailyForecast.forecast0maxC =
        response.forecast.forecastday[0].day.maxtemp_c;
      weatherData.dailyForecast.forecast0maxF =
        response.forecast.forecastday[0].day.maxtemp_f;
      weatherData.dailyForecast.forecast0minC =
        response.forecast.forecastday[0].day.mintemp_c;
      weatherData.dailyForecast.forecast0minF =
        response.forecast.forecastday[0].day.mintemp_f;
      weatherData.dailyForecast.forecast1condition =
        response.forecast.forecastday[1].day.condition.icon;
      weatherData.dailyForecast.forecast1maxC =
        response.forecast.forecastday[1].day.maxtemp_c;
      weatherData.dailyForecast.forecast1maxF =
        response.forecast.forecastday[1].day.maxtemp_f;
      weatherData.dailyForecast.forecast1minC =
        response.forecast.forecastday[1].day.mintemp_c;
      weatherData.dailyForecast.forecast1minF =
        response.forecast.forecastday[1].day.mintemp_f;
      weatherData.dailyForecast.forecast2date =
        response.forecast.forecastday[2].date;
      weatherData.dailyForecast.forecast2condition =
        response.forecast.forecastday[2].day.condition.icon;
      weatherData.dailyForecast.forecast2maxC =
        response.forecast.forecastday[2].day.maxtemp_c;
      weatherData.dailyForecast.forecast2maxF =
        response.forecast.forecastday[2].day.maxtemp_f;
      weatherData.dailyForecast.forecast2minC =
        response.forecast.forecastday[2].day.mintemp_c;
      weatherData.dailyForecast.forecast2minF =
        response.forecast.forecastday[2].day.mintemp_f;
      weatherData.hourlyForecastC = [];
      weatherData.hourlyForecastC[0] =
        response.forecast.forecastday[0].hour[0].temp_c;
      weatherData.hourlyForecastC[1] =
        response.forecast.forecastday[0].hour[2].temp_c;
      weatherData.hourlyForecastC[2] =
        response.forecast.forecastday[0].hour[4].temp_c;
      weatherData.hourlyForecastC[3] =
        response.forecast.forecastday[0].hour[6].temp_c;
      weatherData.hourlyForecastC[4] =
        response.forecast.forecastday[0].hour[8].temp_c;
      weatherData.hourlyForecastC[5] =
        response.forecast.forecastday[0].hour[10].temp_c;
      weatherData.hourlyForecastC[6] =
        response.forecast.forecastday[0].hour[12].temp_c;
      weatherData.hourlyForecastC[7] =
        response.forecast.forecastday[0].hour[14].temp_c;
      weatherData.hourlyForecastC[8] =
        response.forecast.forecastday[0].hour[16].temp_c;
      weatherData.hourlyForecastC[9] =
        response.forecast.forecastday[0].hour[18].temp_c;
      weatherData.hourlyForecastC[10] =
        response.forecast.forecastday[0].hour[20].temp_c;
      weatherData.hourlyForecastC[11] =
        response.forecast.forecastday[0].hour[22].temp_c;
      weatherData.hourlyForecastF = [];
      weatherData.hourlyForecastF[0] =
        response.forecast.forecastday[0].hour[0].temp_f;
      weatherData.hourlyForecastF[1] =
        response.forecast.forecastday[0].hour[2].temp_f;
      weatherData.hourlyForecastF[2] =
        response.forecast.forecastday[0].hour[4].temp_f;
      weatherData.hourlyForecastF[3] =
        response.forecast.forecastday[0].hour[6].temp_f;
      weatherData.hourlyForecastF[4] =
        response.forecast.forecastday[0].hour[8].temp_f;
      weatherData.hourlyForecastF[5] =
        response.forecast.forecastday[0].hour[10].temp_f;
      weatherData.hourlyForecastF[6] =
        response.forecast.forecastday[0].hour[12].temp_f;
      weatherData.hourlyForecastF[7] =
        response.forecast.forecastday[0].hour[14].temp_f;
      weatherData.hourlyForecastF[8] =
        response.forecast.forecastday[0].hour[16].temp_f;
      weatherData.hourlyForecastF[9] =
        response.forecast.forecastday[0].hour[18].temp_f;
      weatherData.hourlyForecastF[10] =
        response.forecast.forecastday[0].hour[20].temp_f;
      weatherData.hourlyForecastF[11] =
        response.forecast.forecastday[0].hour[22].temp_f;
      weatherData.hourlyForecastImg = [];
      weatherData.hourlyForecastImg[0] =
        response.forecast.forecastday[0].hour[0].condition.icon;
      weatherData.hourlyForecastImg[1] =
        response.forecast.forecastday[0].hour[2].condition.icon;
      weatherData.hourlyForecastImg[2] =
        response.forecast.forecastday[0].hour[4].condition.icon;
      weatherData.hourlyForecastImg[3] =
        response.forecast.forecastday[0].hour[6].condition.icon;
      weatherData.hourlyForecastImg[4] =
        response.forecast.forecastday[0].hour[8].condition.icon;
      weatherData.hourlyForecastImg[5] =
        response.forecast.forecastday[0].hour[10].condition.icon;
      weatherData.hourlyForecastImg[6] =
        response.forecast.forecastday[0].hour[12].condition.icon;
      weatherData.hourlyForecastImg[7] =
        response.forecast.forecastday[0].hour[14].condition.icon;
      weatherData.hourlyForecastImg[8] =
        response.forecast.forecastday[0].hour[16].condition.icon;
      weatherData.hourlyForecastImg[9] =
        response.forecast.forecastday[0].hour[18].condition.icon;
      weatherData.hourlyForecastImg[10] =
        response.forecast.forecastday[0].hour[20].condition.icon;
      weatherData.hourlyForecastImg[11] =
        response.forecast.forecastday[0].hour[22].condition.icon;

      console.log(weatherData);

      if (units === 'Celsius') {
        renderCelsius(weatherData);
      } else if (units === 'Fahrenheit') {
        renderFahrenheit(weatherData);
      }
    })
    .catch(function (error) {
      console.log('Error: ' + error);
    });
}
