type Props = {
  value: number;
  onChange: (val: number) => void;
};

export default function Input({ value, onChange }: Props) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => {
  const value = e.target.value;
  onChange(value === "" ? 0 : Number(value));
}}
      className="border px-3 py-2 rounded w-40"
      placeholder="Sales Threshold"
    />
  );
}
