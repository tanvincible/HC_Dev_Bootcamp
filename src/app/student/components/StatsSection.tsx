"use client";

type StatsCardProps = {
  title: string;
  value: string;
  subtitle: string;
};

export default function StatsCard({ title, value, subtitle }: StatsCardProps) {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-black text-sm">{title}</h2>
      <p className="text-3xl text-black font-bold">{value}</p>
      <p className="text-black text-xs">{subtitle}</p>
    </div>
  );
}
