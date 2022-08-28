import React, { useMemo, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { preparePieChartData } from "../../utils/helper";
import Select from "../common/Select";

const CustomPieChart = ({ data }) => {
  const [dateFilter, setDateFilter] = useState(undefined);

  const pieData = useMemo(
    () => preparePieChartData(data, dateFilter),
    [dateFilter, data]
  );

  const COLORS = ["#ED589D", "#3AACFF", "#6C63F0", "#FF8042"];
  return (
    <>
      <div className="mt-10">
        <Select
          label="Time Frame"
          list={data.slice(0, 3)}
          onChange={setDateFilter}
          title="Select date"
        />
      </div>
      <div className="mt-5 bg-white rounded-lg border border-gray-200 p-10 shadow-2xl">
        <PieChart width={800} height={400}>
          <Tooltip />
          <Pie
            data={pieData}
            cx={350}
            cy={200}
            innerRadius={100}
            outerRadius={150}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index,
            }) => {
              const RADIAN = Math.PI / 180;

              const radius = 25 + innerRadius + (outerRadius - innerRadius);

              const x = cx + radius * Math.cos(-midAngle * RADIAN);

              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="#8884d8"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {pieData[index].name} ({value})
                </text>
              );
            }}
          >
            {pieData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </>
  );
};

export default CustomPieChart;
