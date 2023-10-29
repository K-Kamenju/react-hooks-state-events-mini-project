import React, { useState } from "react";

function NewTaskForm({ categories, onTaskAdd }) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: "Food",
  });

  const categoryList = categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Pass the new task to the parent component for handling
    onTaskAdd(newTask);
    // Reset the form after submission
    setNewTask({ text: "", category: "Food" });
  };

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={newTask.category}
          onChange={handleInputChange}
        >
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;