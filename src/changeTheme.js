export { changeTheme };

//cache DOM
const root = document.querySelector(':root');

//functions
function changeTheme() {
  if (root.classList.contains('dark')) {
    root.classList.remove('dark');
  } else {
    root.classList.add('dark');
  }
}
