import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [quan, setQuan] = useState("");
  const [data, setData] = useState([]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDes = (e) => {
    setDes(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleQuan = (e) => {
    setQuan(e.target.value);
  };

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://crudcrud.com/api/3ad8280d5f4e4a0ab4cef935d1995b83/ADDED"
      );
      setData(res.data);
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = {
      name,
      des,
      price: `Rs ${price}`,
      quan,
    };
    try {
      let res = await axios.post(
        "https://crudcrud.com/api/3ad8280d5f4e4a0ab4cef935d1995b83/ADDED",
        details
      );
      getData();
    } catch (error) {
      console.log("error:", error);
    }

    setName("");
    setDes("");
    setPrice("");
    setQuan("");
  };

  const handleCart = async (id, name, des, price, quan) => {
    let obj = {
      id,
      name,
      des,
      price,
      quan: quan - 1,
    };
    try {
      let res = await axios.post(
        "https://cart-d0ae1-default-rtdb.firebaseio.com/Cart.json",
        obj
      );
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <>
      <form>
        <input
          value={name}
          onChange={handleName}
          type="text"
          placeholder="Name Of Medicine"
        />
        <input
          value={des}
          onChange={handleDes}
          type="text"
          placeholder="Description Of Medicine"
        />
        <input
          value={price}
          onChange={handlePrice}
          type="text"
          placeholder="Price Of Medicine"
        />
        <input
          value={quan}
          onChange={handleQuan}
          type="number"
          placeholder="Quantity"
        />
        <input onClick={handleSubmit} type="submit" value="Submit" />
      </form>

      {data.map((items) => {
        return (
          <div key={items._id}>
            <h1>Name : {items.name}</h1>
            <p>Description : {items.des}</p>
            <p>Price : {items.price}</p>
            <p>Quantity : {items.quan}</p>
            <button
              onClick={() =>
                handleCart(
                  items._id,
                  items.name,
                  items.des,
                  items.price,
                  items.quan
                )
              }
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Form;
