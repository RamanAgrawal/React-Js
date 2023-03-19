import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [text, changeText] = useState(false);

  const handleCLick = () => {
    changeText(true);
  };

  return (
    <div>
      <h2>Hello Khushhal</h2>
      {!text && <Output>It's good to see you !</Output>}
      {text && <Output>Changed !</Output>}
      <button onClick={handleCLick}>Change Text</button>
    </div>
  );
};

export default Greeting;
