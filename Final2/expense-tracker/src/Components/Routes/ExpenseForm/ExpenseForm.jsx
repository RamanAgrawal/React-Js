import React, { useContext, useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Expenses.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../Context/Theme";

const ExpenseForm = () => {
  const email = useRef();
  const des = useRef();
  const categories = useRef();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const value = useContext(ThemeContext);
  const Useremail = localStorage.getItem("emailId");
  const ChangesEMail = Useremail.replace("@", "").replace(".", "");
  const [editId, setid] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      email.current.value === "" ||
      des.current.value === "" ||
      categories.current.value === "Category"
    ) {
      alert("Please fill All");
      return;
    }
    if (editId === undefined) {
      try {
        setLoading(true);
        let res = await axios.post(
          `https://expensetraker-93642-default-rtdb.firebaseio.com/cart/${ChangesEMail}.json`,
          {
            amount: email.current.value,
            description: des.current.value,
            categories: categories.current.value,
          }
        );
        setLoading(false);
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
      } catch (error) {
        setLoading(false);
        console.log("error:", error);
      }
    } else {
      console.log(editId);
      try {
        setLoading(true);
        let res = await axios.put(
          `https://expensetraker-93642-default-rtdb.firebaseio.com/cart/${ChangesEMail}/${editId}.json`,
          {
            amount: email.current.value,
            description: des.current.value,
            categories: categories.current.value,
          }
        );
        console.log(res);
        getData();
        setid(undefined);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("error:", error);
      }
    }
  };

  const getData = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `https://expensetraker-93642-default-rtdb.firebaseio.com/cart/${ChangesEMail}.json`
      );
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      let res = await axios.delete(
        `https://expensetraker-93642-default-rtdb.firebaseio.com/cart/${ChangesEMail}/${id}.json`
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
      setLoading(false);
      getData();
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  };

  const handleEdit = (amount, description, categorie) => {
    email.current.value = amount;
    des.current.value = description;
    categories.current.value = categorie;
    if (
      email.current.value === amount ||
      des.current.value === description ||
      categories.current.value === categorie
    ) {
      return;
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

  if (loading) {
    return (
      <img
        src="https://media.tenor.com/1s1_eaP6BvgAAAAC/rainbow-spinner-loading.gif"
        alt="image"
      ></img>
    );
  }

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
        {total >= 10000 && (
          <button onClick={value.handleTheme} className="btns">
            Activate Premium
          </button>
        )}
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
                          items.amount,
                          items.description,
                          items.categories,
                          setid(items.id)
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
