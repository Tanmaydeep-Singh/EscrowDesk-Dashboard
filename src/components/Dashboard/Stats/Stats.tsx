import React from "react";
import Card from "../Cards/Cards";

const Stats= () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card title="Total Revenue" value="$0" subtitle="Collection needs attention" trend="0.0%" />
      <Card title="Active Projects" value="0" subtitle="Completion needs focus" trend="0.0%" />
      <Card title="Tasks Completed" value="0" subtitle="Trending up this week" trend="+0.0%" />
      <Card title="Team Members" value="0" subtitle="Light task load" trend="0.0 avg" />
    </div>
  );
};

export default Stats;
