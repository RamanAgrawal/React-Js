import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Expenses.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExpenseForm = () => {
  const email = useRef();
  const des = useRef();
  const categories = useRef();
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        email.current.value === "" ||
        des.current.value === "" ||
        categories.current.value === "Category"
      ) {
        alert("Please fill All");
      } else {
        let res = await axios.post(
          "https://expensetraker-93642-default-rtdb.firebaseio.com/cart.json",
          {
            amount: email.current.value,
            description: des.current.value,
            categories: categories.current.value,
          }
        );
        setData(res.data);
        getData();
        if (res.status === 200) {
          email.current.value = "";
          des.current.value = "";
          categories.current.value = "Category";
        }
        toast.success("EXPENSE--ADDED", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
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
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(
        `https://expensetraker-93642-default-rtdb.firebaseio.com/cart/${id}.json`
      );
      toast.success("EXPENSE--DELETED", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getData();
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleEdit = async (id, amount, description, categorie) => {
    email.current.value = amount;
    des.current.value = description;
    categories.current.value = categorie;
    if (
      email.current.value === amount ||
      des.current.value === description ||
      categories.current.value === categorie
    ) {
    } else {
      try {
        let res = await axios.put(
          `https://expensetraker-93642-default-rtdb.firebaseio.com/cart/${id}.json`,
          {
            amount: email.current.value,
            description: des.current.value,
            categories: categories.current.value,
          }
        );
      } catch (error) {
        console.log("error:", error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let items = [];
  for (let key in data) {
    const obj = {
      id: key,
      ...data[key],
    };
    items.push(obj);
  }

  const total = items.reduce((accumulator, curItem) => {
    return Number(curItem.amount) + accumulator;
  }, 0);

  return (
    <>
      <h1>Expense Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={email}
          name="email"
          type="number"
          placeholder="Enter Amount"
        />
        <input
          ref={des}
          name="description"
          type="text"
          placeholder="Enter Description"
        />
        <select ref={categories} name="categories" id="">
          <option>Category</option>
          <option value="Food">Food</option>
          <option value="Petrol">Petrol</option>
          <option value="Salery">Salery</option>
          <option value="Other">Other</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h3>Total Expenses : {total}</h3>
        {total > 10000 && <button className="btns">Activate Premium</button>}
      </div>
      <table className="top-table" border={"0"} cellSpacing={"0"}>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Category</th>
            <th>Delete Expense</th>
            <th>Edit Expense</th>
          </tr>
        </thead>
      </table>
      <div>
        {items.map((items) => {
          return (
            <div key={items.id} className="expenses">
              <Table striped bordered hover border={"0"} cellSpacing={"0"}>
                <tbody>
                  <tr className="details-expenses">
                    <td>{items.amount}</td>
                    <td>{items.description}</td>
                    <td>{items.categories}</td>
                    <td className="btns" onClick={() => handleDelete(items.id)}>
                      Delete
                    </td>
                    <td
                      className="btns"
                      onClick={() =>
                        handleEdit(
                          items.id,
                          items.amount,
                          items.description,
                          items.categories
                        )
                      }
                    >
                      Edit
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </>
  );
};

export default ExpenseForm;
