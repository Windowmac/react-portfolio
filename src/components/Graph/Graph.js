import getAPI from '../getAPI';
import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './Graph.css';

const Graph = (props) => {
  return (
    <div className="box" id="graph-bg">
      <div>
        <canvas
          id="myChart"
          style={{ width: '500px', height: '500px' }}
        ></canvas>
      </div>
      {useEffect(() => {
        const buildGraph = (langObj) => {
          const labels = Object.keys(langObj);
          const dataSet = Object.values(langObj);

          const data = {
            labels: labels,
            datasets: [
              {
                label: 'Github Languages',
                backgroundColor: [
                  'rgb(0, 0, 0)',
                  'whitesmoke',
                  'olive',
                  'violet',
                  'gold'
                ],
                borderColor: 'gold',
                data: dataSet,
                hoverOffset: 4,
              },
            ],
          };
          const config = {
            type: 'doughnut',
            data: data,
            options: {
              responsive: false,
            },
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
