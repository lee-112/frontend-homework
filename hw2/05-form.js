document.querySelector('form').style.width = '500px';
const form = document.getElementById('formID');
// eslint-disable-next-line no-console
const Console = console;

/**
 * Filters and maps the form elements to return an array of key-value pairs.
 * @param {HTMLFormControlsCollection} formElements - The form elements collection.
 * @returns {Array<[string, string]>} - An array of key-value pairs representing the form data.
 */
function handleFormData(formElements) {
  const { elements } = formElements;
  const data = [...elements]
    .filter((elem) => elem.name
      && (elem.type !== 'checkbox' || elem.checked))
    .map((elem) => [elem.name, elem.value]);
  return data;
}

/**
 * Logs the form data to the console as key-value pairs.
 * @param {Array<[string, string]>} formData - The form data to display in the console.
 */
function displayFormData(formData) {
  Console.group('From Submission');
  formData.forEach(([key, value]) => {
    Console.log(`${key}: ${value}`);
  });
}

/**
 * Adds an event listener to submit and display form data.
 * Prevents default submissions.
 * Closes the console group, and resets the form.
 */
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = handleFormData(form);
  displayFormData(formData);
  Console.groupEnd();
  form.reset();
});
