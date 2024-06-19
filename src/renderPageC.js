export { renderCelsius };

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

//functions
function renderCelsius(data) {
  renderCurrentWeatherC(data);
  renderThreeDayForecastC(data);
  renderHourlyForecastC(data);
}

function renderCurrentWeatherC(data) {
  location.textContent =
    data.today.city.toUpperCase() + ', ' + data.today.country.toUpperCase();
  currentTemp.textContent = data.today.temperatureCelsius + '\u00B0C';
  condition.textContent = data.today.condition;
  conditionImg.src = data.today.conditionImg;
  highLow.textContent =
    'H:' +
    data.dailyForecast.forecast0maxC +
    '\u00B0C' +
    ' | ' +
    'L:' +
    data.dailyForecast.forecast0minC +
    '\u00B0C';

  localTime.textContent = 'Local time: ' + editTime(data).newCurrentTime; //reformat time/date obj
  humidity.textContent = data.today.humidity + '%';
  wind.textContent = data.today.windKph + ' kph';
  uv.textContent = data.today.uvIndex;
  feelsLike.textContent = data.today.feelsLikeC + '\u00B0C';
}

function renderThreeDayForecastC(data) {
  weatherImg0.src = data.dailyForecast.forecast0condition;
  maxTemp0.textContent = 'H: ' + data.dailyForecast.forecast0maxC + '\u00B0C';
  minTemp0.textContent = 'L: ' + data.dailyForecast.forecast0minC + '\u00B0C';

  weatherImg1.src = data.dailyForecast.forecast1condition;
  maxTemp1.textContent = 'H: ' + data.dailyForecast.forecast1maxC + '\u00B0C';
  minTemp1.textContent = 'L: ' + data.dailyForecast.forecast1minC + '\u00B0C';

  dayThreeDate.textContent = editTime(data).newDateInThreeDays;
  weatherImg2.src = data.dailyForecast.forecast2condition;
  maxTemp2.textContent = 'H: ' + data.dailyForecast.forecast2maxC + '\u00B0C';
  minTemp2.textContent = 'L: ' + data.dailyForecast.forecast2minC + '\u00B0C';
}

function renderHourlyForecastC(data) {
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
    temp.textContent = data.hourlyForecastC[i] + '\u00B0C';
    hour.appendChild(temp);

    hoursContainer.appendChild(hour);
  }
}
