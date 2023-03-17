import axios from "axios";
import React, { useEffect, useState } from "react";

const inistate = {
  email: "",
  description: "",
  categories: "",
};

const ExpenseForm = () => {
  const [formData, setFormData] = useState(inistate);
  const [data, setData] = useState([]);
  const handleCHange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "https://expensetraker-93642-default-rtdb.firebaseio.com/cart.json",
        formData
      );
      getData();
    } catch (error) {
      console.log("error:", error);
    }
  };

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://expensetraker-93642-default-rtdb.firebaseio.com/cart.json"
      );
      setData(res.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(
        `https://expensetraker-93642-default-rtdb.firebaseio.com/cart/${id}.json`
      );
      console.log(res);
      getData();
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let items = [];
  for (let key in data) {
    items.push({ id: key, ...data[key] });
  }

  return (
    <>
      <h1>Expense Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.email}
          onChange={handleCHange}
          name="email"
          type="text"
          placeholder="Enter Amount"
        />
        <input
          value={formData.description}
          onChange={handleCHange}
          name="description"
          type="text"
          placeholder="Enter Description"
        />
        <select
          value={formData.categories}
          onChange={handleCHange}
          name="categories"
          id=""
        >
          <option>Category</option>
          <option value="Food">Food</option>
          <option value="Petrol">Petrol</option>
          <option value="Salery">Salery</option>
          <option value="Other">Other</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      <div>
        {items.map((items) => {
          return (
            <div key={items.id}>
              <h1>{items.email}</h1>
              <h1>{items.description}</h1>
              <h1>{items.categories}</h1>
              <button>Edit</button>
              <button onClick={() => handleDelete(items.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExpenseForm;
