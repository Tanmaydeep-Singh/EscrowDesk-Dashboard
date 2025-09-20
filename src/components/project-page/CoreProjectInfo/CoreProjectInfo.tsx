import React, { useState } from "react";

const CoreProjectIndo = () => {
    const [projectModal, setProjectModal] = useState(false);

    return (
        <div className="flex items-center justify-between w-full mb-6">

                <div>
                    <h1 className="text-2xl font-bold text-white">Project Alpha</h1>
                    <p className="text-gray-400">Client: John Doe • Started: Sep 15, 2025</p>
                </div>


            <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-600 text-white">
                In Progress
            </span>

        </div>
    );
};

export default CoreProjectIndo;