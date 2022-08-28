import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { sortByDate } from "../../utils/helper";

const TimeSeries = ({ data }) => {
  return (
    <div className="mt-10 bg-white rounded-lg border border-gray-200 p-10 shadow-2xl">
      <AreaChart
        width={700}
        height={400}
        data={sortByDate(data)}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="EB-400"
          stackId="1"
          stroke="#3AACFF"
          fill="#d9dffe"
        />
        <Area
          type="monotone"
          dataKey="EB-374"
          stackId="1"
          stroke="#ED589D"
          fill="#ddc4eb"
        />
        <Area
          type="monotone"
          dataKey="EB-513"
          stackId="1"
          stroke="#6C63F0"
          fill="#bdbfef"
        />
      </AreaChart>
    </div>
  );
};

export default TimeSeries;
