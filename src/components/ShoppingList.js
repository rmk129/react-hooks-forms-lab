import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [typeCategory, setTypeCategory] = useState("")

  function typingCategoryChange(event) {
      setTypeCategory(event.target.value)
  }  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
 
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
      if (typeCategory === ""){
       return true
       }
       else if (item.name.toLowerCase().includes(typeCategory.toLowerCase())){
           return item;
       }
     })

  function onItemFormSubmit(newItem){

    setItem([...items, newItem])

  }   

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={typeCategory} onSearchChange={typingCategoryChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
