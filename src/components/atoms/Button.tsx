type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105 transition-all duration-200 text-sm"
    >
      {label}
    </button>
  );
}
