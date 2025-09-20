import CoreProjectIndo from "@/components/project-page/CoreProjectInfo/CoreProjectInfo";
import TabbedContent from "@/components/project-page/TabbedContent/TabbedContent";


export default function ProjectDetailsPage() {

  return (
    <div className="container mx-auto py-6">
      <CoreProjectIndo />

      <TabbedContent />
    </div>
  );
}