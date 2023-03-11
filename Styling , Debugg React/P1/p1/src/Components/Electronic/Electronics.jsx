import React from "react";

const Electronics = (props) => {
  const handleDle = (id) => {
    props.deleteEle(id);
  };
  return (
    <div>
      <h1>Electronics</h1>
      {props.electronics.map((items) => {
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
            <button onClick={() => handleDle(items.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Electronics;
