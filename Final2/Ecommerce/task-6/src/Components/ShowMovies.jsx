import axios from "axios";
import React from "react";
const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
};
const ShowMovies = (props) => {
  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(
        `https://crudcrud.com/api/${props.id}/movies/${id}`
      );
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div>
      {props.data.map((el) => {
        return (
          <div key={el._id} style={style}>
            <h1>Title : {el.title}</h1>
            <p>Details : {el.area}</p>
            <p>Release Date : {el.date}</p>
            <button onClick={() => handleDelete(el._id)}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowMovies;
