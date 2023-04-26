document.body.style.backgroundColor = '#00435f';
document.querySelector('main').style.maxWidth = '500px';

const word = document.getElementById('wordID');
const text = document.getElementById('textID');
const innerText = text.innerHTML;

/**
 * Escapes special characters in a string for regular expressions.
 * @param string - The input string to escape.
 * @returns The escaped string with special characters replaced.
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Adds an 'input' event listener to the word input element.
 * When triggered, highlights all word occurrences in the text.
 */
word.addEventListener('input', () => {
  const markWord = word.value;
  text.innerHTML = innerText;

  if (markWord.trim() !== '') {
    const matching = RegExp(`\\b${escapeRegExp(markWord)}\\b`, 'gi');
    text.innerHTML = text.innerHTML.replace(matching, `
      <mark class="bg-warning d-inline p-0 m-0">${markWord}</mark>
    `);
  }
});
