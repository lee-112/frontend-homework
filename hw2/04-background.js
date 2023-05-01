// document.querySelector('main').style.maxWidth = '512px';
const inputBtn = document.getElementById('buttonID');
const inputStr = document.getElementById('numberID');
let interval;

/**
 * Generates a random color using hsla color values.
 * Applies generated color to the background of body element.
 * Background color changes periodically based on user input(sec).
 */
function randomColorGenerator() {
  interval = setInterval(() => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 75);
    const l = Math.floor(33 - Math.random());
    const a = ((Math.random() * 0.3) + 0.3);
    document.body.style.backgroundColor = `
      hsla(${h}, ${s}%, ${l}%, ${a})`;
  }, parseInt(inputStr.value, 10) * 1000);
}

/**
 * Starts the interval to generate random colors.
 * Updates the button state and appearance.
 */
function startInterval() {
  randomColorGenerator();
  inputBtn.value = 'Stop';
  inputStr.disabled = true;
  inputBtn.classList.add('btn-danger');
}

/**
 * Stops the interval to generate random colors.
 * Resets the button state and appearance.
 */
function stopInterval() {
  clearInterval(interval);
  inputBtn.value = 'Start';
  inputStr.disabled = false;
  inputBtn.classList.remove('btn-danger');
}

/**
 * Adds a 'click' event listener to the input button.
 * When the button is clicked, starts/stops, the
 * interval to generate random background colors.
 */
inputBtn.addEventListener('click', () => {
  if (inputBtn.value === 'Start') startInterval();
  else stopInterval();
});
