import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((item) => item.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint,index) => {
        return (
          <ChartBar
            key={index}
            value={dataPoint.value}
            label={dataPoint.label}
            maxValue={totalMaximum}
          />
        );
      })}
    </div>
  );
};

export default Chart;
