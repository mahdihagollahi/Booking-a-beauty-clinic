
'use client';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend } from 'recharts'; 

const data = [
  {
    name: 'فیلر لب',
    uv: 80,
    fill: '#36a2eb',
  },
  {
    name: 'فیلر بینی',
    uv: 30,
    fill: '#9966ff',
  },
  {
    name: 'لیزر موهای زائد',
    uv: 50,
    fill: '#4bc0c0',
  },
  {
    name: 'ساکشن غبغب',
    uv: 50,
    fill: '#DC1E7A',
  },
];
const totalUv = data.reduce((acc, cur) => acc + cur.uv, 0);
  
export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radial-bar-chart-gnwjjg';
  
  render() {
    return (
      <div className='mr-24 w-60 h-60'> 
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={data}
          >
            <RadialBar
              minAngle={15}
              label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                const percentage = ((data[index].uv / totalUv) * 100).toFixed(0);

                return (
                  <text
                    x={x}
                    y={y}
                    fill="#fff"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {`${percentage}%`}
                  </text>
                );
              }}
              background
              clockWise
              dataKey="uv"
            />
            <Legend
              iconSize={20}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={{
                width: '10px',  
                height: '150px', 
                top: '50%',
                left: '137%',
                borderRadius: '200px',
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'flex-start',
                whiteSpace: 'nowrap',
                transform: 'translate(0, -50%)',
                lineHeight: '34px',
              }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
