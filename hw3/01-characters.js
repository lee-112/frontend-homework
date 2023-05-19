async function displayCharacterCards(data) {
  const sectionTagHTML = document.querySelector('section');
  data.forEach((character) => {
    const characterCards = `
      <div class="card">
        <img alt="${character.id}" src="${character.imageUrl}">
        <div class="card-body">
          <h2 class="fs-5 fw-bolder">${character.fullName}</h2>
          <h3 class="fs-6 fw-bolder my-3">${character.title}</h3>
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
