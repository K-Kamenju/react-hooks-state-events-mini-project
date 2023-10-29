import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
console.log({CATEGORIES})

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS)

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  // Define the onTaskAdd function to handle adding a new task
  const onTaskAdd = (newTask) => {
    // Create a new array of tasks by spreading the existing tasks and adding the new task
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      onCategorySelect={handleCategorySelect} 
      selectedCategory={selectedCategory}/>
      <NewTaskForm 
      categories={CATEGORIES} 
      onTaskAdd={onTaskAdd}/>
      <TaskList 
      tasks={tasks} 
      setTasks={setTasks} 
      selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
