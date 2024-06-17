export { render };

//cache DOM
const p = document.getElementById('test');
const imgtest = document.getElementById('imgtest');
const test1 = document.getElementById('test1');
const test2 = document.getElementById('test2');

//bind events

//functions
function render(weatherInfo) {
  p.textContent = weatherInfo.city + ' ' + weatherInfo.temperatureCelsius;

  imgtest.src = weatherInfo.forecast0condition;
  test1.textContent = 'max: ' + weatherInfo.forecast0maxC;
  test2.textContent = 'min: ' + weatherInfo.forecast0minC;
}
