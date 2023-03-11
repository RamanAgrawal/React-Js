import React from "react";

const Food = (props) => {
  return (
    <div>
      <h1>Food</h1>
      {props.food.map((items) => {
        return (
          <div
            key={items.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <h1>
              {items.name}--{items.price}--{items.category}
            </h1>
            <button onClick={() => props.deleteFood(items.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Food;
