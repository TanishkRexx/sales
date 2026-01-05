type Props = {
  label: string;
  onClick: () => void;
};

export default function Button({ label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded
hover:bg-blue-700 hover:scale-105
transition-transform duration-200"

    >
      {label}
    </button>
  );
}
