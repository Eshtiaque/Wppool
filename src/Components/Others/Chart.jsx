import React, { PureComponent } from 'react';
import './styles.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2022-01-01', WPOOL: -10, Google: 0, Microsoft: 0, Twitter: 0 },
  { date: '2022-02-01', WPOOL: 20, Google: 35, Microsoft: 10, Twitter: 5 },
  { date: '2022-03-01', WPOOL: 50, Google: 20, Microsoft: 45, Twitter: 15 },
  { date: '2022-04-01', WPOOL: 30, Google: 60, Microsoft: 25, Twitter: 35 },
  { date: '2022-05-01', WPOOL: 70, Google: 40, Microsoft: 55, Twitter: 20 },
  { date: '2022-06-01', WPOOL: 40, Google: 80, Microsoft: 30, Twitter: 45 },
  { date: '2022-07-01', WPOOL: 90, Google: 60, Microsoft: 70, Twitter: 50 },
  { date: '2022-08-01', WPOOL: 60, Google: 90, Microsoft: 50, Twitter: 70 },
  { date: '2022-09-01', WPOOL: 100, Google: 75, Microsoft: 80, Twitter: 55 },
  { date: '2022-10-01', WPOOL: 80, Google: 95, Microsoft: 60, Twitter: 90 },
  { date: '2022-11-01', WPOOL: 110, Google: 85, Microsoft: 95, Twitter: 65 },
  { date: '2022-12-01', WPOOL: 90, Google: 105, Microsoft: 70, Twitter: 110 },
  { date: '2023-01-01', WPOOL: 120, Google: 95, Microsoft: 105, Twitter: 75 },
  { date: '2023-02-01', WPOOL: 100, Google: 115, Microsoft: 80, Twitter: 130 },
  { date: '2023-03-01', WPOOL: 130, Google: 105, Microsoft: 115, Twitter: 85 },
  { date: '2023-04-01', WPOOL: 110, Google: 125, Microsoft: 90, Twitter: 150 },
  { date: '2023-05-01', WPOOL: 140, Google: 115, Microsoft: 125, Twitter: 95 },
  { date: '2023-06-01', WPOOL: 120, Google: 135, Microsoft: 100, Twitter: 170 },
  { date: '2023-07-01', WPOOL: 150, Google: 125, Microsoft: 135, Twitter: 105 },
  { date: '2023-08-01', WPOOL: 130, Google: 145, Microsoft: 110, Twitter: 190 },
  { date: '2023-09-01', WPOOL: 160, Google: 135, Microsoft: 145, Twitter: 115 },
  { date: '2023-10-01', WPOOL: 140, Google: 155, Microsoft: 120, Twitter: 210 },
  { date: '2023-11-01', WPOOL: 170, Google: 145, Microsoft: 155, Twitter: 125 },
  { date: '2023-12-01', WPOOL: 150, Google: 165, Microsoft: 130, Twitter: 230 },
  
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-200 p-2 text-left px-12 rounded-xl">
        <p className="label text-black font-bold">{`${label}`}</p>
        <div className="intro flex items-center">
          <span style={{ display: 'inline-block', width: 10, height: 10, backgroundColor: '#ff7300', marginRight: 5 }}></span>
          {`WPOOL: ${payload[0].value}%`}
        </div>
        <div className="intro flex items-center">
          <span style={{ display: 'inline-block', width: 10, height: 10, backgroundColor: '#387908', marginRight: 5 }}></span>
          {`Google: ${payload[1].value}%`}
        </div>
        <div className="intro flex items-center">
          <span style={{ display: 'inline-block', width: 10, height: 10, backgroundColor: '#38abc8', marginRight: 5 }}></span>
          {`Microsoft: ${payload[2].value}%`}
        </div>
        <div className="intro flex items-center">
          <span style={{ display: 'inline-block', width: 10, height: 10, backgroundColor: '#8884d8', marginRight: 5 }}></span>
          {`Twitter: ${payload[3].value}%`}
        </div>
      </div>
    );
  }

  return null;
};

export default class Chart extends PureComponent {
  render() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
      <ResponsiveContainer width="100%" height={550}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date"
            tickFormatter={(date) => {
              const d = new Date(date);
              return monthNames[d.getMonth()];
            }}
            interval={2} 
          />
          <YAxis 
            tickFormatter={(value) => `${value}%`} 
            domain={[-10, 230]}
            ticks={[-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220]} 
            interval={0}
          />
          <Tooltip content={<CustomTooltip />} />
          
          <Line type="monotone" dataKey="WPOOL" stroke="#ff7300" />
          <Line type="monotone" dataKey="Google" stroke="#387908" />
          <Line type="monotone" dataKey="Microsoft" stroke="#38abc8" />
          <Line type="monotone" dataKey="Twitter" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
