import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import TodoTask from "./TodoTask";

function App() {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskname: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string):void => {
    setTodoList(todoList.filter((task)=>{
      return task.taskname !== taskNameToDelete
    }))
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold  underline">Todo Form</h1>
      <div className="header mt-3">
   
        <input
        className="border border-black p-1 mr-1"
          type="text"
          name="task"
          placeholder="Task"
          onChange={handleChange}
          value={task}
        />
        <input
        className="border border-black p-1 mr-1"

          type="number"
          name="deadline"
          placeholder="Deadline"
          onChange={handleChange}
          value={deadline}
        />
        <button onClick={addTask} className="border border-blue-700 bg-blue-700 text-white rounded-lg p-1">Add Task</button>
      </div>
      <h1 className="text-3xl font-bold  mt-20 underline">Todo List</h1>

      <div className="todolist">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
