import { useEffect, useState } from "react";
import { getAllTasks } from "../../api/task.api";
import TaskCard from "./TaskCard";
import CreateDialog from "./CreateDialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TaskGallery = () => {
  const [tasks, setTasks] = useState([]);
  const [position, setPosition] = useState("todo");

  async function loadTasks() {
    const res = await getAllTasks();
    console.log(res);
    setTasks(res.data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default">Filter By Status</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="todo">To Do</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="done">Done</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <CreateDialog loadTasks={loadTasks}/>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 items-start">
        {tasks.map((task: any) => (
          <TaskCard key={task?.id} task={task} loadTasks={loadTasks} />
        ))}
      </div>
    </div>
  );
};

export default TaskGallery;
