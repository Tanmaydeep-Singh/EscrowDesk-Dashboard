interface StatsCardProps {
  label: string;
  value: number;
  subtext: string;
  color: "blue" | "green";
}

export default function StatsCard({ label, value, subtext, color }: StatsCardProps) {
  const colors = {
    blue: "text-blue-400",
    green: "text-green-400",
  };

  return (
    <div>
      <p className={`font-semibold ${colors[color]}`}>{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-500">{subtext}</p>
    </div>
  );
}
