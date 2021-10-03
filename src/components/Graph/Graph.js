import getAPI from '../getAPI';
import { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Graph = (props) => {
  return (
    <div>
      <div>
        <canvas id="myChart"></canvas>
      </div>
      {useEffect(() => {

        const buildGraph = (langObj) => {

          console.log('langObj is: ', langObj);
          const labels = Object.keys(langObj);
          const dataSet = Object.values(langObj);
          console.log('dataSet is: ', dataSet);
          console.log('labels are: ', labels);

          const data = {
            labels: labels,
            datasets: [
              {
                label: 'Github Languages',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: dataSet,
              },
            ],
          };
          const config = {
            type: 'pie',
            data: data,
          };

          new Chart(document.getElementById('myChart'), config);
        };

        return getAPI().then(buildGraph);
      }, [])}
      {props.sectionDisplay}
    </div>
  );
};

export default Graph;
