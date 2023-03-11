import React, { useState } from "react";

const AvailableCandy = (props) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = (id, name, description, price, input) => {
    props.handleCart(id, name, description, price, input);
  };

  return (
    <div>
      {props.items.map((candy) => {
        return (
          <div
            key={candy.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>
              {candy.name}---{candy.description}--{candy.price}
            </h1>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter Quantity"
            />
            <button
              onClick={() =>
                handleAdd(
                  candy.id,
                  candy.name,
                  candy.description,
                  candy.price,
                  input
                )
              }
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableCandy;
