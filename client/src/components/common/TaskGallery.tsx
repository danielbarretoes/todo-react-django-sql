import { useEffect, useState } from "react";
import { getAllTasks } from "../../api/task.api";

const TaskGallery = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      console.log(res);
      setTasks(res.data);
    }
    loadTasks();
  }, []);
  return (
    <div>
      {tasks.map((task: any) => (
        <div key={task?.id}>
          <h2>{task?.title}</h2>
          <p>{task?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskGallery;
