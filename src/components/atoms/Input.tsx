type Props = {
  value: number;
  onChange: (value: number) => void;
};

export default function Input({ value, onChange }: Props) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder="Sales threshold"
      className="border px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
    />
  );
}
