import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      setLoading(true);
      let res = await axios.get("https://swapi.dev/api/films");
      console.log(res.data.results);
      setData(res.data.results);
      setLoading(true);
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  };

  return (
    <div className="App">
      <button onClick={fetch}>Fetch Movies</button>
      {loading && (
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
      )}
      {loading && <p>loading</p>}
      {!loading && data.length === 0 && <p>No movies</p>}
    </div>
  );
}

export default App;
