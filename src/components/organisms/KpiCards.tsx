type Props = {
  data: { month: string; sales: number }[];
};

export default function KpiCards({ data }: Props) {
  const total = data.reduce((sum, d) => sum + d.sales, 0);
  const avg = data.length ? Math.round(total / data.length) : 0;
  const max = data.reduce((p, c) => (c.sales > p.sales ? c : p), data[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="p-4 bg-white rounded shadow">
        <p className="text-gray-500">Total Sales</p>
        <p className="text-2xl font-bold">{total}</p>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <p className="text-gray-500">Average Sales</p>
        <p className="text-2xl font-bold">{avg}</p>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <p className="text-gray-500">Best Month</p>
        <p className="text-2xl font-bold">
          {max?.month} ({max?.sales})
        </p>
      </div>
    </div>
  );
}
