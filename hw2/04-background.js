document.querySelector('main').style.maxWidth = '500px';
const inputBtn = document.getElementById('buttonID');
const inputStr = document.getElementById('numberID');
let interval;

/**
 * Generates a random color using hsla color values.
 * Applies generated color to the background of body element.
 * Background color changes periodically based on user input(seconds).
 */
function randomColorGenerator() {
  const inputInt = (parseInt(inputStr.value, 10) * 1000);

  interval = setInterval(() => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 75);
    const l = Math.floor(33 - Math.random());
    const a = ((Math.random() * 0.3) + 0.3);
    document.body.style.backgroundColor = `
      hsla(${h}, ${s}%, ${l}%, ${a})`;
  }, inputInt);
}

/**
 * Adds a 'click' event listener to the input button.
 * When the button is clicked, set/clear interval change.
 */
inputBtn.addEventListener('click', () => {
  if (inputBtn.value === 'Start') {
    randomColorGenerator();
    inputBtn.value = 'Stop';
  } else {
    clearInterval(interval);
    inputBtn.value = 'Start';
  }
});
