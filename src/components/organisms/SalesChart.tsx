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
} from "recharts";

type Props = {
  data: any[];
  type: string;
  year: number; // 👈 ADD THIS
};

export default function SalesChart({ data, type, year }: Props) {
  // 🎨 Color by year
  const colorMap: Record<number, string> = {
    2022: "#16a34a", // green
    2023: "#2563eb", // blue
    2024: "#dc2626", // red
  };

  const color = colorMap[year] || "#2563eb";

  // 📈 LINE CHART
  if (type === "line") {
    return (
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sales"
          stroke={color}     // 👈 HERE
          strokeWidth={3}
          isAnimationActive
        />
      </LineChart>
    );
  }

  // 🥧 PIE CHART
  if (type === "pie") {
    return (
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="sales"
          nameKey="month"
          fill={color}      // 👈 HERE
          isAnimationActive
        />
        <Tooltip />
      </PieChart>
    );
  }

  // 📊 BAR CHART (DEFAULT)
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey="sales"
        fill={color}       // 👈 HERE
        isAnimationActive
      />
    </BarChart>
  );
}
