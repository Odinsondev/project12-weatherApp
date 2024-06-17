import './normalize.css';
import './style.css';
//import other stylesheets

import { runFetchForecast } from './fetchWeather';

/* import pictureName from './imagedDirectory/imageName'; */

//initialize

//cache DOM
let cityName = '';

const input = document.getElementById('input');
const searchButton = document.getElementById('search');

//bind events
searchButton.addEventListener('click', changeCityName);

//functions
function changeCityName() {
  if (input.value === '') {
    runFetchForecast('Vancouver');
  } else {
    cityName = input.value;
    runFetchForecast(cityName);
    input.value = '';
  }
}
