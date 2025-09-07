'use client';

import Stats from "@/components/Dashboard/Stats/Stats";


export default function Home() {

  return (
    <div className=" p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400">Welcome back, Tanmaydeep! Here&apos;s your overview.</p>
      </div>

      {/* Stats */}
      <Stats />

      {/* Revenue Overview + Sidebar */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RevenueOverview />
        <RevenueStats />
      </div> */}
    </div>


  );
}
