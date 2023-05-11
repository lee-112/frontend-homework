async function displayCharacterCards(data) {
  const sectionTagHTML = document.querySelector('section');
  data.forEach((character) => {
    const characterCards = `
      <div class="card">
        <img src="${character.imageUrl}">
        <div class="card-body">
          <h5 class="fw-bolder">${character.fullName}</h5>
          <h6 class="fw-bold">${character.title}</h6>
        </div>
      </div>`;
    sectionTagHTML.innerHTML += characterCards;
  });
}

async function fetchData() {
  const url = 'https://thronesapi.com/api/v2/Characters';
  try {
    const response = await fetch(url);
    const data = await response.json();
    await displayCharacterCards(data);
  } catch (error) { // eslint-disable-next-line no-console
    console.error('Error: fetching thronesAPI data', error);
  }
}

fetchData();
