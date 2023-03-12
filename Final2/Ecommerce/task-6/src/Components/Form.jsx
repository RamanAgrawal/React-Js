import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowMovies from "./ShowMovies";

const Form = () => {
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [Data, setData] = useState([]);
  const crudId = "d338b8e207f74b9895fa83115d81ee38";
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleArea = (e) => {
    setArea(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = {
      title,
      area,
      date,
    };
    try {
      let res = await axios.post(
        `https://crudcrud.com/api/${crudId}/movies`,
        details
      );
      
    } catch (error) {
      console.log("error:", error);
    }
  };

  const getData = async () => {
    try {
      let res = await axios.get(`https://crudcrud.com/api/${crudId}/movies`);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label>Title</label>
        <div>
          <input
            onChange={handleTitle}
            type={"text"}
            placeholder={"Enter Title Here"}
          />
        </div>
        <label>Opening Text</label>
        <div>
          <textarea
            placeholder={"Enter Title Here"}
            onChange={handleArea}
          ></textarea>
        </div>
        <label>Release Date</label>
        <div>
          <input
            onChange={handleDate}
            type={"text"}
            placeholder={"Enter Release Date"}
          />
        </div>
        <input onClick={handleSubmit} type={"submit"} value={"ADD MOVIE"} />
      </form>
      <ShowMovies data={Data} id={crudId} />
    </>
  );
};

export default Form;
