import React, { useState } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";

const ProjectHead = () => {
    const [projectModal, setProjectModal] = useState(false);

    return (
        <div className="relative z-100 pointer-events-auto flex items-center justify-between w-full mb-6">
            <div>
                <h1 className="text-2xl font-bold text-white">Projects</h1>
                <p className="text-gray-400">
                    Manage your Project list and add new ones here.
                </p>
            </div>

            <button className="pointer-events-auto px-4 py-2 rounded-xl bg-white text-black text-sm font-medium 
                             shadow-md hover:opacity-90 transition"
                onClick={() => { setProjectModal(true) }}
            >
                Add Project
            </button>


            {projectModal &&
                <ProjectModal onClose={() => { setProjectModal(false) }} />
            }
        </div>
    );
};

export default ProjectHead;
