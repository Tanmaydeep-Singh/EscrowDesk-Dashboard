import CoreProjectIndo from "@/components/project-page/CoreProjectInfo/CoreProjectInfo";
import ContractModal from "@/components/project-page/Model/ContractModal";
import TaskModal from "@/components/project-page/Model/TasksModel";
import TabbedContent from "@/components/project-page/TabbedContent/TabbedContent";
import { useContractStore } from "@/store/contractStore";
import { useTaskStore } from "@/store/tasksStore";


export default function ProjectDetailsPage() {
  const { taskModal ,taskModaltoggle } = useTaskStore()
  const { contractModal, contractModalToggle } = useContractStore();

  return (
    <div className="container mx-auto py-6">
      <CoreProjectIndo />

        {taskModal &&
              <TaskModal onClose={taskModaltoggle} />
            } 

             {contractModal && <ContractModal onClose={contractModalToggle} />}

      <TabbedContent />
    </div>
  );
}