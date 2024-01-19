import { Button } from "../ui/button";
import EditDialog from "./EditDialog";

const TaskCard = ({ task, loadTasks }: any) => {
  return (
    <div className="min-[320px]:w-full max-w-72 aspect-square border p-4 hover:border-primary flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold">{task?.title}</h2>
          <EditDialog task={task} loadTasks={loadTasks} />
        </div>
        <p className="text-sm mt-2">{task?.description}</p>
      </div>
      <Button variant={"link"}>Mark as Done</Button>
    </div>
  );
};

export default TaskCard;
