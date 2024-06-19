export { editTime };

//functions
function editTime(data) {
  const currentTime = data.today.time;
  const year = currentTime.slice(0, 4);
  const month = currentTime.slice(5, 7);
  const day = currentTime.slice(8, 10);
  const clock = currentTime.slice(11);
  const newTime = clock + ' ' + day + '.' + month + '.' + year;

  const dateInThreeDays = data.dailyForecast.forecast2date;
  const year2 = dateInThreeDays.slice(0, 4);
  const month2 = dateInThreeDays.slice(5, 7);
  const day2 = dateInThreeDays.slice(8, 10);
  const newTime2 = day2 + '.' + month2 + '.' + year2;

  const newTimeObject = {};
  newTimeObject.newCurrentTime = newTime;
  newTimeObject.newDateInThreeDays = newTime2;

  return newTimeObject;
}
