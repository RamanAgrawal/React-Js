import { useContext, useEffect } from "react";
import "./App.css";
import AllRotes from "./Components/AllRoutes/AllRotes";
import { ThemeContext } from "./Components/Context/Theme";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const value = useContext(ThemeContext);

  const style = {
    light: {
      color: "black",
      background: "white",
    },
    dark: {
      color: "white",
      background: "black",
    },
  };

  return (
    <div
      className="App"
      style={value.theme === "dark" ? style.light : style.dark}
    >
      <Navbar />
      <AllRotes />
    </div>
  );
}

export default App;
