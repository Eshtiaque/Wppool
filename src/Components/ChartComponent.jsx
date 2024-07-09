import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
);

const data = {
  labels: [
    '2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01', '2022-06-01', '2022-07-01'
  ],
  datasets: [
    {
      label: 'WPPOOL',
      data: [0, 20, 40, 60, 1556.9, 80, 100],
      borderColor: 'red',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      pointRadius: 0,
    },
    {
      label: 'Google',
      data: [0, 10, 30, 50, 877.7, 70, 90],
      borderColor: 'orange',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      pointRadius: 0,
    },
    {
      label: 'Microsoft',
      data: [0, 5, 25, 45, 193.3, 65, 85],
      borderColor: 'green',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      pointRadius: 0,
    },
    {
      label: 'Twitter',
      data: [0, 15, 35, 55, 90.2, 75, 95],
      borderColor: 'purple',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'month'
      }
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += `${context.parsed.y}%`;
          }
          return label;
        }
      }
    }
  }
};

const ChartComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">The WPPOOL Index</h2>
      <div className="flex justify-around mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-500">+66.2%</div>
          <div className="text-sm text-gray-500">WPPOOL Index</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-500">+26.6%</div>
          <div className="text-sm text-gray-500">Google Index</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">+34.1%</div>
          <div className="text-sm text-gray-500">Microsoft</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-500">+17%</div>
          <div className="text-sm text-gray-500">Twitter Index</div>
        </div>
      </div>
      <Line data={data} options={options} />
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-700">1Y</button>
        <button className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-700">YTD</button>
        <button className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-700">6M</button>
        <button className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-700">1M</button>
        <button className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-700">1W</button>
      </div>
    </div>
  );
};

export default ChartComponent;
