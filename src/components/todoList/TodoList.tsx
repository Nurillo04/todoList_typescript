// import React, { FS, ChangeEvent, useState } from "react";
import React, { ChangeEvent, FS, useState } from "react";
import "./TodoList.scss";
import { ITask } from "./interfaces";
import TodoTask from "./TodoTask";

interface TodoList {
  id: number;
  text: string;
  completed: boolean;
  value: string;
}

const TodoList: FS = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameTodoDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameTodoDelete;
      })
    );
  };

  return (
    <div>
      <div className="todo">
        <h2>Todo List</h2>
        <div className="todo__header">
          <div className="todo__inputs">
            <input
              type="text"
              placeholder="Task..."
              onChange={handleChange}
              value={task}
              name="task"
            />
            <input
              type="number"
              placeholder="DeadLine (in Days)..."
              onChange={handleChange}
              value={deadline}
              name="deadline"
            />
          </div>
          <button className="todo__btn" onClick={addTask}>
            Add Task
          </button>
        </div>
        <div className="todo__List">
          {todoList.map((task: ITask, key: number) => {
            return (
              <TodoTask key={key} task={task} completeTask={completeTask} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
