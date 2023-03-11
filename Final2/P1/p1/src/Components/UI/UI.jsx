import React from "react";
import Electronics from "../Electronic/Electronics";
import Food from "../Food/Food";
import Skin from "../SkinCare/Skin";

const UI = (props) => {
  return (
    <div>
      <Electronics
        deleteEle={props.deleteEle}
        electronics={props.electronics}
      />
      <Food deleteFood={props.deleteFood} food={props.food} />
      <Skin deleteSkin={props.deleteSkin} skin={props.skin} />
    </div>
  );
};

export default UI;
