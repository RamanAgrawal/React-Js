import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const datapoints = props.datapoint.map((dataPoints) => dataPoints.value);
  const totalMax = Math.max(...datapoints);
  return <div className="chart"></div>;
};

export default Chart;
