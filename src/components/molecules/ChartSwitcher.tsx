"use client";

import Button from "@/components/atoms/Button";

export default function ChartSwitcher({
  setType,
}: {
  setType: (t: string) => void;
}) {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button label="Bar" onClick={() => setType("bar")} />
      <Button label="Line" onClick={() => setType("line")} />
      <Button label="Pie" onClick={() => setType("pie")} />
    </div>
  );
}
