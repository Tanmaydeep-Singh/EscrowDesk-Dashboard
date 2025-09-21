'use client';

import Overview from "@/components/Dashboard/OverView/Overview";
import ProjectStatusOverview from "@/components/Dashboard/OverView/Project-stats/ProjectStatusOverview";
import ProjectStats from "@/components/Dashboard/OverView/Project-status/ProjectStats";
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
      <div className="min-h-[74vh] text-gray-200 ">
        {/* Background Blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

      <div className="w-full flex-grow flex flex-col items-center z-10 ">
          <Stats />
          <Overview />
        </div>
      </div>
    </div>


  );
}
