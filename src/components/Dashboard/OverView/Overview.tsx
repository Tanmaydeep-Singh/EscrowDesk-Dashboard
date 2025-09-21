import React from 'react'
import ProjectStatusOverview from './Project-stats/ProjectStatusOverview'
import ProjectStats from './Project-status/ProjectStats'

const Overview = () => {
    return (

        <div className="w-full flex gap-4 mt-20">

            <div className="flex-1">
                <ProjectStatusOverview />
            </div>

            <div className="w-1/3">
                <ProjectStats />
            </div>
        </div>
    )
}

export default Overview