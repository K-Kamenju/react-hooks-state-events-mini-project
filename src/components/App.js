import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  function handleCategorySelect(category) {
    setSelectedCategory(category)
  }

  function onTaskAdd(formData) {
    const updatedTasks = [...tasks, formData]
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      selectedCategory={selectedCategory} 
      onCategorySelect={handleCategorySelect} />
      <NewTaskForm 
      categories={CATEGORIES} 
      onTaskAdd={onTaskAdd} />
      <TaskList tasks={tasks} setTasks={setTasks} selectedCategory={selectedCategory} />
    </div>
  );
}
export default App;