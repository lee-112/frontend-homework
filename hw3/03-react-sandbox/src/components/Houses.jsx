import { backgroundColors, borderColors } from "./Utility";
import React, { useState, useEffect } from "react";
import Chart, { ArcElement } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

Chart.register(ArcElement);

const familyMap = {
  Bae: "Baelish",
  Bar: "Baratheon",
  Cle: "Clegane",
  joy: "Greyjoy",
  Lan: "Lannister",
  Sea: "Seaworth",
  ark: "Stark",
  gar: "Targaryen",
  arl: "Tarly",
  Tyr: "Tyrell"
};

const parseChartData = (data) => {
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
    Others: 0
  };

  data.forEach((character) => {
    let houseFound = false;

    for (const [key, value] of Object.entries(familyMap)) {
      if (character.family.includes(key)) {
        houseData[value] += 1;
        houseFound = true;
        break;
      }
    }

    if (!houseFound) {
      houseData.Others += 1;
    }
  });

  const chartLegend = Object.keys(houseData);
  const chartValues = Object.values(houseData);

  return {
    labels: chartLegend,
    datasets: [
      {
        label: "Thrones Houses",
        data: chartValues,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  };
};

const Houses = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(
          "https://thronesapi.com/api/v2/Characters"
        );
        const data = response.data;
        const chartData = parseChartData(data);
        setChartData(chartData);
      } catch (error) {
        console.error("Error: fetching thronesAPI data", error);
      }
    };

    fetchChartData();
  }, []);

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "black"
        }
      },
      title: {
        display: true,
        text: "Thrones Houses",
        color: "black"
      }
    },
    maintainAspectRatio: true,
    responsive: true,
    backgroundColor: "white"
  };

  return (
    <>
      <h1 className="text-center my-4">Doughnut Chart</h1>
      {chartData ? (
        <div
          className="vh-auto m-auto bg-white rounded"
          style={{ width: "80vw", height: "fit-content" }}
        >
          <Doughnut
            className="d-flex m-auto p-2 w-50 h-auto"
            data={chartData}
            options={options}
          />
        </div>
      ) : (
        <div>Error...</div>
      )}
    </>
  );
};

export default Houses;
