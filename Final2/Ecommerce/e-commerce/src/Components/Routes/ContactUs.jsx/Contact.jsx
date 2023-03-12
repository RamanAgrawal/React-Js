import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNumber = (e) => {
    setPhn(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = {
      name,
      email,
      phn,
    };
    try {
      let res = await axios.post(
        "https://e-commerce-1-55a40-default-rtdb.firebaseio.com/data.json",
        details
      );
      console.log("res:", res);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <form>
      <input onChange={handleName} type="text" placeholder="Name" />
      <input onChange={handleEmail} type="text" placeholder="Email" />
      <input onChange={handleNumber} type="text" placeholder="Phone-Number" />
      <input onClick={handleSubmit} type="submit" value={"SUBMIT"} />
    </form>
  );
};

export default Contact;
