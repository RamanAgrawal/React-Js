import React, { useState } from "react";

const CandyForm = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleID = (e) => {
    setId(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      id,
      name,
      description,
      price,
    };
    // console.log(details);
    props.handleSubmit(details);
    setId("");
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <form>
      <input value={id} onChange={handleID} type="text" placeholder="id" />
      <input
        value={name}
        onChange={handleName}
        type="text"
        placeholder="name"
      />
      <input
        value={description}
        onChange={handleDescription}
        type="text"
        placeholder="description"
      />
      <input
        value={price}
        onChange={handlePrice}
        type="text"
        placeholder="price"
      />
      <input onClick={handleSubmit} type="submit" value={"Submit"} />
    </form>
  );
};

export default CandyForm;
