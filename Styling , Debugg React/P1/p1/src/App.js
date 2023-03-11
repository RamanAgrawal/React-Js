import "./App.css";
import Form from "./Components/Form";
import { useState } from "react";
import UI from "./Components/UI/UI";

function App() {
  const [electronics, setElectronics] = useState([]);
  const [food, setFood] = useState([]);
  const [skinCare, setskinCare] = useState([]);
  const addele = (data) => {
    setElectronics((prev) => {
      return [data, ...prev];
    });
  };
  const addFood = (data) => {
    setFood((prev) => {
      return [data, ...prev];
    });
  };
  const AddSkin = (data) => {
    setskinCare((prev) => {
      return [data, ...prev];
    });
  };

  const deleteEle = (id) => {
    const newListEle = electronics.filter((items) => items.id !== id);
    setElectronics(newListEle);
    localStorage.removeItem(id);
  };
  const deleteFood = (id) => {
    const newlistFood = food.filter((items) => items.id !== id);
    setFood(newlistFood);
    localStorage.removeItem(id);
  };
  const deleteSkin = (id) => {
    const newListSkin = skinCare.filter((items) => items.id !== id);
    setskinCare(newListSkin);
    localStorage.removeItem(id);
  };

  return (
    <div className="App">
      <Form addele={addele} addFood={addFood} AddSkin={AddSkin} />
      <UI
        deleteEle={deleteEle}
        deleteFood={deleteFood}
        deleteSkin={deleteSkin}
        electronics={electronics}
        food={food}
        skin={skinCare}
      ></UI>
    </div>
  );
}

export default App;
