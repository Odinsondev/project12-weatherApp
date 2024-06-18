export { editTime };

//cache DOM

//bind events

//functions
function editTime(data) {
  const time = data.today.time;
  const year = time.slice(0, 4);
  const month = time.slice(5, 7);
  const day = time.slice(8, 10);
  const clock = time.slice(11);
  const newTime = clock + ' ' + day + '.' + month + '.' + year;

  return newTime;
}
