"use client";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 mb-5 bg-gray-200 rounded-xl">
      <h1 className="text-2xl font-bold text-black">Dashboard</h1>
      <div className="flex items-center space-x-3">
        <button className="p-2 text-2xl bg-gray-200 rounded-full">🔔</button>
        <button className="p-2 text-2xl bg-gray-200 rounded-full">✉️</button>
      </div>
    </header>
  );
}
