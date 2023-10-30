import React, { useState } from "react";

function NewTaskForm({categories, onTaskAdd}) {

  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  });

  const displayCategories = categories.map(category => {
    if (category === "All") {
      return (
        null
      )
    } else {
      return (
        <option 
        className="selected" 
        key={category}
        onClick={() => console.log(category)}>
          {category}
        </option>
      )
    }
  })

  function handleSubmit(e) {
    e.preventDefault();
    onTaskAdd(formData);
    setFormData({
      text: "",
      category: "Code"
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" 
        name="text" 
        value={formData.text} 
        onChange={e => setFormData({...formData, text: e.target.value})}/>
      </label>
      <label>
        Category
        <select 
        name="category" 
        value={formData.category} 
        onChange={e => setFormData({...formData, category: e.target.value})}>
          {displayCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;