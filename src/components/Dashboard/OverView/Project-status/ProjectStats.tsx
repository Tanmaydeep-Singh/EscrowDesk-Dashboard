import StatsCard from "./StatsCard";

export default function ProjectStats() {
  return (
    <div className="p-4 rounded-md border border-white/10 bg-white/10 ">
      <div className="h-20">
        <h2 className="text-xl font-bold text-white">Project Stats</h2>
        <p className="text-sm text-gray-400">Current project metrics</p>
      </div>
      <div className="mt-4 space-y-4 h-96">
        <StatsCard
          label="Active Projects"
          value={0}
          subtext="0 total projects"
          color="blue"
        />
        <StatsCard
          label="Completed"
          value={0}
          subtext="0.0% completion rate"
          color="green"
        />
      </div>
    </div>
  );
}
