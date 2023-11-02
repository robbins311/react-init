import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  // map으로 value만 끄집어낸 배열생성
  console.log(props);
  const dataPointValues = props.dataPoints.map(
    (dataPoints) => dataPoints.value,
  );
  // 전개 연산자로 배열분해
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
