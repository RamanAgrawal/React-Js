import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      let res = await axios.get("https://swapi.dev/api/films");
      console.log(res.data.results);
      setData(res.data.results);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="App">
      <button onClick={fetch}>Fetch Movies</button>
      {data.map((el) => {
        return (
          <div key={el.title}>
            {el.title}
            <p>{el.opening_crawl}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
