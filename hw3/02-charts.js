const backgroundColors = [
  'rgba(54,  162, 235, 0.8)',
  'rgba(255, 206, 86,  0.8)',
  'rgba(255, 99,  132, 0.8)',
  'rgba(75,  192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64,  0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83,  102, 255, 0.8)',
  'rgba(40,  159, 64,  0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78,  52,  199, 0.8)',
];

const borderColors = [
  'rgba(54,  162, 235, 1)',
  'rgba(255, 206, 86,  1)',
  'rgba(255, 99,  132, 1)',
  'rgba(75,  192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64,  1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83,  102, 255, 1)',
  'rgba(40,  159, 64,  1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78,  52,  199, 1)',
];

const renderChartData = (houseData) => {
  const donutChart = document.querySelector('.donut-chart');
  const chartLabel = Object.keys(houseData);
  const chartValue = Object.values(houseData);
  // eslint-disable-next-line
  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: chartLabel,
      datasets: [{
        label: 'My First Dataset',
        data: chartValue,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      }],
    },
  });
};

const parseChartData = async (data) => {
  const houseData = {
    Baelish: 0,
    Baratheon: 0,
    Clegane: 0,
    Greyjoy: 0,
    Lannister: 0,
    Seaworth: 0,
    Stark: 0,
    Targaryen: 0,
    Tarly: 0,
    Tyrell: 0,
    Others: 0,
  };

  data.forEach((character) => {
    switch (true) {
      case character.family.includes('Bae'): houseData.Baelish += 1; break;
      case character.family.includes('Bar'): houseData.Baratheon += 1; break;
      case character.family.includes('Cle'): houseData.Clegane += 1; break;
      case character.family.includes('joy'): houseData.Greyjoy += 1; break;
      case character.family.includes('Lan'): houseData.Lannister += 1; break;
      case character.family.includes('Sea'): houseData.Seaworth += 1; break;
      case character.family.includes('ark'): houseData.Stark += 1; break;
      case character.family.includes('gar'): houseData.Targaryen += 1; break;
      case character.family.includes('arl'): houseData.Tarly += 1; break;
      case character.family.includes('Tyr'): houseData.Tyrell += 1; break;
      default: houseData.Others += 1; break;
    }
  });
  renderChartData(houseData);
};

const fetchChartData = async () => {
  const url = 'https://thronesapi.com/api/v2/Characters';
  try {
    const response = await fetch(url);
    const data = await response.json();
    await parseChartData(data);
  } catch (error) { // eslint-disable-next-line no-console
    console.error('Error: fetching thronesAPI data', error);
  }
};

fetchChartData();
