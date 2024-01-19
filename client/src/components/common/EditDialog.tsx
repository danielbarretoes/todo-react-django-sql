import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { updateTask } from "@/api/task.api";

const EditDialog = ({ task, loadTasks }: any) => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    done: false,
  });

  const handleChange = ({ target: { name, value } }: any) => {
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async () => {
    console.log(input);
    const res = await updateTask(task.id, input).then(() => {
      loadTasks();
    });
    console.log(res);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="h-6 px-2" variant={"outline"}>
          Edit
        </Button>
      </DialogTrigger>
      {/* DIALOG CONTENT */}
      <DialogContent>
        <h2 className="font-bold text-lg">Edit Task</h2>
        <form className="flex flex-col gap-2">
          <Input defaultValue={task?.title} onChange={handleChange} />
          <Textarea defaultValue={task?.description} onChange={handleChange} />
          <div className="flex justify-between gap-4 mt-4">
            <DialogClose>
              <Button className="w-full" variant={"destructive"}>
                Delete
              </Button>
            </DialogClose>
            <DialogClose>
              <Button className="w-full" onClick={handleSubmit}>
                Update
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
