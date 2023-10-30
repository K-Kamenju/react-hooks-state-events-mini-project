import React from "react";

function Task({tasks, setTasks, selectedCategory}) {

  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory);

  function handleDelete(id) {
    const newTasks = tasks.filter(task => task.text !== id)
    setTasks(newTasks)
  }

  const displayTasks = filteredTasks.map(task => {
    return (
      <div className="task" key={task.text}>
        <div className="label">{task.category}</div>
        <div className="text">{task.text}</div>
        <button className="delete" onClick={() => {handleDelete(task.text)}}>X</button>
    </div>
    )
  })
  return (
    <>
      {displayTasks}
    </>
  );
}

export default Task;