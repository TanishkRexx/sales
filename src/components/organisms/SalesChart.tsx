"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: any[];
  type: string;
  year: number;
};

export default function SalesChart({ data, type, year }: Props) {
  
  const colorMap: Record<number, string> = {
    2022: "#16a34a", 
    2023: "#2563eb", 
    2024: "#0d9488", 
  };

  const color = colorMap[year] || "#2563eb";

  /*  LINE CHART  */
  if (type === "line") {
    return (
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke={color} strokeWidth={3}  dot={{ r: 4 }}  isAnimationActive
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  /* PIE CHART */
  if (type === "pie") {
    return (
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="sales"
            nameKey="month"
            fill={color}
            outerRadius={100}
            isAnimationActive
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  /* BAR CHART */
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="sales"
          fill={color}
          radius={[6, 6, 0, 0]}
          isAnimationActive
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
