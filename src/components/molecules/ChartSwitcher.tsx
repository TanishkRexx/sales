import Button from "../atoms/Button";

type Props = {
  setType: (type: string) => void;
};

export default function ChartSwitcher({ setType }: Props) {
  return (
    <div className="flex gap-2">
      <Button label="Bar" onClick={() => setType("bar")} />
      <Button label="Line" onClick={() => setType("line")} />
      <Button label="Pie" onClick={() => setType("pie")} />
    </div>
  );
}
