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
        const getLanguages = async () => {
          const languages = await getAPI();
          return languages;
        };

        const buildGraph = (langObj) => {
          console.log('langObj is: ', langObj);
          const labels = Object.keys(langObj).map((key) => key);
          const dataSet = Object.values(langObj).map((val) => val);
          console.log('labels are: ', Object.keys(langObj));
          console.log('dataSet is: ', Object.values(langObj));

          const data = {
            labels: ['red', 'yellow', 'blue'],
            datasets: [
              {
                label: 'Github Languages',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 12, 25],
              },
            ],
          };
          const config = {
            type: 'pie',
            data: data,
          };

          new Chart(document.getElementById('myChart'), config);
        };

        return getLanguages().then(buildGraph);
      }, [])}
      {props.sectionDisplay}
    </div>
  );
};

export default Graph;
