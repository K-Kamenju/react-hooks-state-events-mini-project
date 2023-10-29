import React from "react";

function CategoryFilter({ categories, onCategorySelect, selectedCategory }) {
  const categoryList = categories.map((category) => (
    <button 
    key={category} 
    className={category === selectedCategory ? "selected" : ""} 
    onClick={() => onCategorySelect(category)}>
      {category}
    </button>
  ))
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;