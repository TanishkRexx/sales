"use client";

import { useState } from "react";
import { salesData } from "@/data/sales";
import SalesChart from "@/components/organisms/SalesChart";
import ChartSwitcher from "@/components/molecules/ChartSwitcher";
import Input from "@/components/atoms/Input";
import KpiCards from "@/components/organisms/KpiCards";


export default function DashboardPage() {
  const [year, setYear] = useState(2024);
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState("bar");

const filteredData = salesData.filter(
  (d) =>
    d.year === year &&
    d.sales >= (isNaN(threshold) ? 0 : threshold)
);


  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Sales Dashboard</h1>

      <div className="flex gap-4 mb-4">
        <select
          className="border px-3 py-2 rounded"
          onChange={(e) => setYear(Number(e.target.value))}
        >
          <option value={2024}>2024</option>
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
        </select>

        <Input value={threshold} onChange={setThreshold} />
        <ChartSwitcher setType={setChartType} />
      </div>
      <KpiCards data={filteredData} />
<div className="flex justify-center items-center mt-6">
  <SalesChart
    data={filteredData}
    type={chartType}
    year={year}
  />
</div>

    </div>
  );
}
