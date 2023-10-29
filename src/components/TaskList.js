import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks, selectedCategory }) {

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <Task 
      tasks={tasks} 
      setTasks={setTasks} 
      selectedCategory={selectedCategory} />
    </div>
  );
}

export default TaskList;
