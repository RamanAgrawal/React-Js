import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
