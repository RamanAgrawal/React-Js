import { useContext } from "react";
import "./App.css";
import AllRotes from "./Components/AllRoutes/AllRotes";
import { ThemeContext } from "./Components/Context/Theme";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const value = useContext(ThemeContext);
  console.log(value);
  const style = {
    light: {
      color: "black",
      background: "white",
    },
    dark: {
      color: "black",
      background: "aqua",
    },
  };
  return (
    <div
      className="App"
      style={value.theme === "dark" ? style.dark : style.light}
    >
      <Navbar />
      <AllRotes />
    </div>
  );
}

export default App;
