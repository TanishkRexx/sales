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
    (d) => d.year === year && d.sales >= threshold
  );

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
          Sales Dashboard
        </h1>

        {/* Filters */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl shadow p-4 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          <select
            className="border px-3 py-2 rounded-lg w-full lg:w-auto"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
          </select>

          <div className="w-full lg:w-60">
            <Input value={threshold} onChange={setThreshold} />
          </div>

          <ChartSwitcher setType={setChartType} />
        </div>

        {/* KPIs */}
        <KpiCards data={filteredData} />

        {/* Chart */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow p-4 sm:p-6">
          <SalesChart data={filteredData} type={chartType} year={year} />
        </div>

      </div>
    </div>
  );
}
