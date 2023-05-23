import React from "react";
import { ITask } from "./Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}
const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow">
        <table className="w-full">
          <tr>
            <td className="p-2">{task.taskname}</td>
            <td className="p-2">{task.deadline}</td>
            <td className="p-2">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => {
                  completeTask(task.taskname);
                }}
              >
                X
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default TodoTask;
