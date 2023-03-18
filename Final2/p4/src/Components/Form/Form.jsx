import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [quan, setQuan] = useState("");
  const [data, setData] = useState([]);
  const crudid = "9a5abc2e2ce646219bd54f66b8003336";

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
      let res = await axios.get(`https://crudcrud.com/api/${crudid}/ADDED`);
      setData(res.data);
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
      quan: Number(quan),
    };
    try {
      let res = await axios.post(
        `https://crudcrud.com/api/${crudid}/ADDED`,
        details
      );
      getData();
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }

    setName("");
    setDes("");
    setPrice("");
    setQuan("");
  };

  const handleCart = async (name, des, price, quan, items) => {
    let obj = {
      name,
      des,
      price,
      quan,
    };
    try {
      let res = await axios.post(
        "https://cart-d0ae1-default-rtdb.firebaseio.com/Cart.json",
        obj
      );
      alert("Medicine Added To Cart & Quantity Decreased");
      getUpdate(items);
    } catch (error) {
      console.log("error:", error);
    }
  };

  async function getUpdate(items) {
    console.log(items.des);
    try {
      let res = await axios.put(
        `https://crudcrud.com/api/${crudid}/ADDED/${items._id}`,
        {
          name: items.name,
          des: items.des,
          price: items.price,
          quan: items.quan - Number(1),
        }
      );
      getData();
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  }

  const handleRemove = async (id) => {
    try {
      let res = await axios.delete(
        `https://crudcrud.com/api/${crudid}/ADDED/${id}`
      );
      alert("Medicine Removed");
      getData();
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
                  items.name,
                  items.des,
                  items.price,
                  items.quan,
                  items
                )
              }
            >
              Add To Cart
            </button>
            <button onClick={() => handleRemove(items._id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Form;
