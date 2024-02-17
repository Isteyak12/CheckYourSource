// ./components/PieChart.js
import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-Chart.js-2";
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
labels: labels,
datasets: [
  {
  label: "My First dataset",
  backgroundColor: "rgb(255, 99, 132)",
  borderColor: "rgb(0,0,255)",
  data: [0, 10, 5, 2, 20, 30, 45],
  },
 ],
};
const Graph = (props) => {
    const data = props.data;

return (
  <div>
    <Pie data={data} />
   </div>
  );
};
export default Graph;