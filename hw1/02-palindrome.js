document.addEventListener('DOMContentLoaded', () => {
  function isPalindrome(numberInt) {
    const numberStr = numberInt.toString();
    const numberStrReversed = numberStr.split('').reverse().join('');
    return numberStr === numberStrReversed;
  }

  const inputElement = document.getElementById('inputID');
  const outputElement = document.getElementById('outputID');

  inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const numberStr = inputElement.value;
      const numberInt = parseInt(numberStr, 10);

      if (Number.isSafeInteger(numberInt) && numberInt >= 0) {
        const isNumberPalindrome = isPalindrome(numberInt);
        outputElement.innerHTML = isNumberPalindrome
          ? '<p class="m-0" style="color: Green;">Yes, This is a Palindrome!</p>'
          : '<p class="m-0" style="color: FireBrick;">No, Try again.</p>';
      } else {
        outputElement.innerHTML = numberInt < 0
          ? '<p class="alert alert-warning m-0">Error! Only Positive Numbers Allowed.</p>'
          : '<p class="alert alert-warning m-0">Error! Only Numbers Allowed.</p>';
      }
    }
  });
});
