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
import { createTask } from "@/api/task.api";

const CreateDialog = ({ loadTasks }: any) => {
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
    const res = await createTask(input).then(() => {
      loadTasks();
    });
    console.log(res);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="" variant={"default"}>
          Create New Task
        </Button>
      </DialogTrigger>
      {/* DIALOG CONTENT */}
      <DialogContent>
        <h2 className="font-bold text-lg">Edit Task</h2>
        <div className="flex flex-col gap-2">
          <Input name="title" onChange={handleChange} />
          <Textarea name="description" onChange={handleChange} />
          <div className="flex justify-between gap-4 mt-4">
            <DialogClose asChild>
              <Button className="w-full" variant={"destructive"}>
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className="w-full" onClick={handleSubmit}>
                Create
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDialog;
