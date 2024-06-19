export { renderFahrenheit };

import { editTime } from './editTime';

//cache DOM
const location = document.getElementById('location');
const currentTemp = document.getElementById('current-temp');
const condition = document.getElementById('condition');
const conditionImg = document.getElementById('condition-img');
const highLow = document.getElementById('high-low');

const localTime = document.getElementById('local-time');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const uv = document.getElementById('uv');
const feelsLike = document.getElementById('feels-like');

const weatherImg0 = document.getElementById('weather-img-0');
const maxTemp0 = document.getElementById('max-temp-0');
const minTemp0 = document.getElementById('min-temp-0');
const weatherImg1 = document.getElementById('weather-img-1');
const maxTemp1 = document.getElementById('max-temp-1');
const minTemp1 = document.getElementById('min-temp-1');
const dayThreeDate = document.getElementById('day-three-date');
const weatherImg2 = document.getElementById('weather-img-2');
const maxTemp2 = document.getElementById('max-temp-2');
const minTemp2 = document.getElementById('min-temp-2');
const hoursContainer = document.getElementById('hours-container');

//bind events

//functions
function renderFahrenheit(data) {
  renderCurrentWeatherF(data);
  renderThreeDayForecastF(data);
  renderHourlyForecastF(data);
}

function renderCurrentWeatherF(data) {
  location.textContent =
    data.today.city.toUpperCase() + ', ' + data.today.country.toUpperCase();
  currentTemp.textContent = data.today.temperatureFahrenheit + '\u00B0F';
  condition.textContent = data.today.condition;
  conditionImg.src = data.today.conditionImg;
  highLow.textContent =
    'H:' +
    data.dailyForecast.forecast0maxF +
    '\u00B0F' +
    ' | ' +
    'L:' +
    data.dailyForecast.forecast0minF +
    '\u00B0F';

  localTime.textContent = 'Local time: ' + editTime(data).newCurrentTime; //reformat time/date obj
  humidity.textContent = data.today.humidity + '%';
  wind.textContent = data.today.windKph + ' kph';
  uv.textContent = data.today.uvIndex;
  feelsLike.textContent = data.today.feelsLikeF + '\u00B0F';
}

function renderThreeDayForecastF(data) {
  weatherImg0.src = data.dailyForecast.forecast0condition;
  maxTemp0.textContent = 'H: ' + data.dailyForecast.forecast0maxF + '\u00B0F';
  minTemp0.textContent = 'L: ' + data.dailyForecast.forecast0minF + '\u00B0F';

  weatherImg1.src = data.dailyForecast.forecast1condition;
  maxTemp1.textContent = 'H: ' + data.dailyForecast.forecast1maxF + '\u00B0F';
  minTemp1.textContent = 'L: ' + data.dailyForecast.forecast1minF + '\u00B0F';

  dayThreeDate.textContent = editTime(data).newDateInThreeDays;
  weatherImg2.src = data.dailyForecast.forecast2condition;
  maxTemp2.textContent = 'H: ' + data.dailyForecast.forecast2maxF + '\u00B0F';
  minTemp2.textContent = 'L: ' + data.dailyForecast.forecast2minF + '\u00B0F';
}

function renderHourlyForecastF(data) {
  hoursContainer.innerHTML = '';

  for (let i = 0; i < 12; i += 1) {
    const hour = document.createElement('div');
    hour.classList.add('hour');

    const time = document.createElement('p');
    time.classList.add('time');
    time.textContent = `${i * 2}:00`;
    hour.appendChild(time);

    const condition = document.createElement('img');
    condition.classList.add('condition');
    condition.src = data.hourlyForecastImg[i];
    hour.appendChild(condition);

    const temp = document.createElement('p');
    temp.classList.add('temp');
    temp.textContent = data.hourlyForecastF[i] + '\u00B0F';
    hour.appendChild(temp);

    hoursContainer.appendChild(hour);
  }
}
