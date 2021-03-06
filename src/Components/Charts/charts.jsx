import React, { useState, useEffect } from "react";
import { fatchDailydata } from "../Api/api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.css";
const Chart = ({ data: { confirmed, recovered, deaths }, conutry }) => {
  const [dailyData, setdailyData] = useState([]);
  useEffect(() => {
    const fatchAPI = async () => {
      setdailyData(await fatchDailydata());
    };
    // console.log(dailyData);
    fatchAPI();
  }, []);
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `curriunt state in ${conutry}` },
      }}
    />
  ) : null;
  return <div className="container"> {conutry ? barChart : lineChart}</div>;
};

export default Chart;
