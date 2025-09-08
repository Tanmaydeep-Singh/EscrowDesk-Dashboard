"use client";
import ProjectTabs from "./ProjectTabs";
import ChartPlaceholder from "./ChartPlaceholder";

export default function ProjectStatusOverview() {
    return (
        <div className="bg-black rounded-xl shadow-md w-full">
            <div className=" flex justify-between ">
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
