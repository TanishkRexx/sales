import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-xl shadow-lg text-center space-y-4 max-w-md w-full">
        <h1 className="text-xl sm:text-2xl font-bold">
          Sales Dashboard
        </h1>
        <p className="text-sm text-gray-600">
          View yearly sales analytics with interactive charts
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition"
        >
          Open Dashboard
        </Link>
      </div>
    </main>
  );
}
