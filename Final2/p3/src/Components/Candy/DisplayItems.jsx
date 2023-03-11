import React, { useContext } from "react";

import AvailableCandy from "./Available";
import CandyForm from "./Form";

const DisplayItems = (props) => {
  return (
    <div>
      <CandyForm handleSubmit={props.handleSetItems} />
      <AvailableCandy handleCart={props.handleCart} items={props.items} />
    </div>
  );
};

export default DisplayItems;
