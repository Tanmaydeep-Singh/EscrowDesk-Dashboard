import CoreProjectIndo from "@/components/project-page/CoreProjectInfo/CoreProjectInfo";
import TaskModal from "@/components/project-page/Model/TasksModel";
import TabbedContent from "@/components/project-page/TabbedContent/TabbedContent";
import { useTaskStore } from "@/store/tasksStore";


export default function ProjectDetailsPage() {
  const { taskModal ,taskModaltoggle } = useTaskStore()

  return (
    <div className="container mx-auto py-6">
      <CoreProjectIndo />

        {taskModal &&
              <TaskModal onClose={taskModaltoggle} />
            } 

      <TabbedContent />
    </div>
  );
}