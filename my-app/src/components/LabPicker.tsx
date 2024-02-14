import { Button } from "@mui/material";
import { ContentCard } from "../interface/ContentCard";
import { Task } from "../models/Task";
import { useState } from "react";

export const LabPicker: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const [activeTask, setActiveTask] = useState<Task>(tasks[0]);

  const taskButtonClickHandler = (task: Task) => {
    setActiveTask(task);
  };

  return (
    <ContentCard>
      <ContentCard>
        {tasks.map((task: Task, index: number) => (
          <Button key={index} onClick={() => taskButtonClickHandler(task)}>
            {task.taskName}
          </Button>
        ))}
      </ContentCard>
    </ContentCard>
  );
};
