import React from "react";
import { ITask } from "./interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameTodoDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div>
      <div className="task">
        <div className="content">
          <span> {task.taskName}</span>
          <span>{task.deadline}</span>
        </div>
        <button
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
