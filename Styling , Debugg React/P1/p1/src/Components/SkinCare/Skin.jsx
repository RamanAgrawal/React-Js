import React from "react";

const Skin = (props) => {
  return (
    <div>
      <h1>Skin</h1>
      {props.skin.map((items) => {
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
            <button onClick={() => props.deleteSkin(items.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Skin;
