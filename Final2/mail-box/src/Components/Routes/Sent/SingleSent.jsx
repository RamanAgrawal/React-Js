import React from "react";
import { useParams } from "react-router-dom";

const SingleSent = () => {
  const { id } = useParams();

  return <div>singleSent</div>;
};

export default SingleSent;
