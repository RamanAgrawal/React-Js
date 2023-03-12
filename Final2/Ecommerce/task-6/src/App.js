import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleArea = (e) => {
    setArea(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleError = () => {
    setError(false);
  };

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      let res = await axios.get("https://swapi.dev/api/films");
      console.log(res.data.results);
      setData(res.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      throw new Error("Something went wrong ....Retrying");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      title,
      area,
      date,
    };
    console.log(details);
    console.log("heo");
  };

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return (
      <img
        style={{ display: "block", margin: "auto" }}
        src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        alt="image"
      />
    );
  }

  return (
    <div className="App">
      <form>
        <div>
          <label>Title</label>
          <input
            onChange={handleTitle}
            type={"text"}
            placeholder={"Enter Title Here"}
          />
        </div>
        <div>
          <label>Opening Text</label>
          <textarea
            placeholder={"Enter Title Here"}
            onChange={handleArea}
          ></textarea>
        </div>
        <div>
          <label>Release Date</label>
          <input
            onChange={handleDate}
            type={"text"}
            placeholder={"Enter Release Date"}
          />
        </div>
        <input onClick={handleSubmit} type={"submit"} value={"ADD MOVIE"} />
      </form>
      <button onClick={fetch}>Fetch</button>
      <button onClick={handleError}>Cancle</button>
      <div>
        {data.map((el) => {
          return (
            <div key={el.title}>
              {el.title}
              <p>{el.opening_crawl}</p>
            </div>
          );
        })}
      </div>
      {!loading && data.length === 0 && <p>No movies</p>}
      {error && <p>Something went wrong ....Retrying</p>}
    </div>
  );
}

export default App;
