import React, { useState } from "react";

const Form = (props) => {
  const [id, setID] = useState("");
  const [Price, setPrice] = useState("");
  const [PName, setPname] = useState("");
  const [cate, setCate] = useState("");

  const handleId = (e) => {
    setID(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handlePName = (e) => {
    setPname(e.target.value);
  };
  const handleCate = (e) => {
    setCate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      id: id,
      price: Price,
      name: PName,
      category: cate,
    };
    if (cate === "Electronics") {
      props.addele(details);
    }
    if (cate === "Food") {
      props.addFood(details);
    }

    if (cate === "Skincare") {
      props.AddSkin(details);
    }

    localStorage.setItem(id, JSON.stringify(details));
    setID("");
    setPrice("");
    setPname("");
    setCate("");
  };

  return (
    <form>
      <div>
        <label htmlFor="">Product Id : </label>
        <input
          type="number"
          placeholder="Enter Product Id"
          onChange={handleId}
          value={id}
        />
      </div>
      <div>
        <label htmlFor="">Selling Price : </label>
        <input
          type="number"
          placeholder="Enter Product Price"
          onChange={handlePrice}
          value={Price}
        />
      </div>
      <div>
        <label htmlFor="">Product Name : </label>
        <input
          type="text"
          placeholder="Enter Product Name"
          onChange={handlePName}
          value={PName}
        />
      </div>
      <div>
        <label htmlFor="">Select Categories : </label>
        <select value={cate} onChange={handleCate}>
          <option>Choose</option>
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          <option value="Skincare">Skincare</option>
        </select>
      </div>
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
};

export default Form;
