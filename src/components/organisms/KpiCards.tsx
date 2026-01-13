type Props = {
  data: { sales: number }[];
};

export default function KpiCards({ data }: Props) {
  const total = data.reduce((a, b) => a + b.sales, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">Total Sales</p>
        <p className="text-xl font-bold">₹{total}</p>
      </div>
    </div>
  );
}
