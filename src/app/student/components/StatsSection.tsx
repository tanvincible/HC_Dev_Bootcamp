"use client";

type StatsCardProps = {
  title: string;
  value: string;
  subtitle: string;
};

export default function StatsCard({ title, value, subtitle }: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
      <h2 className="text-black dark:text-white text-sm">{title}</h2>
      <p className="text-3xl text-black dark:text-white font-bold">{value}</p>
      <p className="text-black dark:text-white text-xs">{subtitle}</p>
    </div>
  );
}
