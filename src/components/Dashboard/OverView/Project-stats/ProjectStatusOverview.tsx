"use client";
import ProjectTabs from "./ProjectTabs";
import ChartPlaceholder from "./ChartPlaceholder";

export default function ProjectStatusOverview() {
    return (
        <div className="rounded-md shadow-md w-full p-4 border border-white/20  bg-white/10">
            <div className=" flex justify-between border-b border-white/10 pb-4 ">
                <div>
                    <h1 className="text-2xl font-bold text-white">Project Status Overview</h1>
                    <p className="text-gray-400">Track project completion and status trends.</p>
                </div>
                <ProjectTabs />
            </div>
            <ChartPlaceholder />
        </div>
    );
}
