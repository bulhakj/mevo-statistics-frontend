import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = props => {
  const handleMapBatteries = props.nowResponse.map(item => item.battery);

  const handleFilterLowBatteries = handleMapBatteries.filter(
    battery => battery <= 40 && battery > 0
  );

  const handleFilterMediumBatteries = handleMapBatteries.filter(
    battery => battery <= 70 && battery > 40
  );

  const handleFilterHighBatteries = handleMapBatteries.filter(
    battery => battery > 70
  );

  const data = {
    labels: [
      `0% - 40%: ${handleFilterLowBatteries.length}`,
      `41% - 69%: ${handleFilterMediumBatteries.length}`,
      `70% - 100%: ${handleFilterHighBatteries.length}`
    ],
    datasets: [
      {
        data: [
          handleFilterLowBatteries.length,
          handleFilterMediumBatteries.length,
          handleFilterHighBatteries.length
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };
  return <Doughnut data={data} />;
};

export default DoughnutChart;
