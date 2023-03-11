import React from "react";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const datapointsValue = props.dataPoints.map(
    (dataPoints) => dataPoints.value
  );
  const totalMaximum = Math.max(...datapointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((items) => {
        return (
          <ChartBar
            key={items.label}
            value={items.value}
            maxValue={totalMaximum}
            label={items.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
