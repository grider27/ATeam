import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts';
import Title from './Title';

// Generate Books Data
function createData(date, amount) {
  return { date, amount };
}

const data = [
  createData('01/01', 0),
  createData('02/01', 300),
  createData('03/01', 600),
  createData('04/01', 800),
  createData('05/01', 1500),
  createData('06/01', 2000),
  createData('07/01', 2200),
  createData('08/01', 2300),
  createData('09/01', 2400),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Class Progress</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Books Read (#)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
