import './normalize.css';
import './style.css';

import { runFetchForecast } from './fetchWeather';
import { changeTheme } from './changeTheme';

//cache DOM
let cityName = 'Vancouver';
let units = 'Celsius';

const input = document.getElementById('input');
const searchButton = document.getElementById('search');
const unitToggleButton = document.getElementById('unit-toggle');
const changeThemeButton = document.getElementById('theme');

//bind events
searchButton.addEventListener('click', changeCityName);
unitToggleButton.addEventListener('click', changeUnits);
changeThemeButton.addEventListener('click', changeTheme);

//functions
function changeCityName() {
  if (input.value === '') {
    runFetchForecast(cityName, units);
  } else {
    cityName = input.value;
    runFetchForecast(cityName, units);
    input.value = '';
  }
}

function changeUnits() {
  if (units === 'Celsius') {
    units = 'Fahrenheit';
    runFetchForecast(cityName, units);
  } else if (units === 'Fahrenheit') {
    units = 'Celsius';
    runFetchForecast(cityName, units);
  }
}

runFetchForecast('Vancouver', units);
