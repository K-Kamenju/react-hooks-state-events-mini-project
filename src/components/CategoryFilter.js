import React from "react";

function CategoryFilter({categories, selectedCategory, onCategorySelect}) {

  const displayCategories = categories.map(category => {
    return (
      <button 
      className={selectedCategory === category ? "selected" : ""} 
      key={category}
      onClick={() => onCategorySelect(category)}>
        {category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;