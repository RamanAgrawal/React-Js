import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleSent = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const email = useSelector((store) => {
    return store.auth.email;
  });
  const [data, setData] = useState({ to: ".", body: "." });
  const newEmail = email.replace("@", "").replace(".", "");

  const getSentSingleData = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `https://mail-box-4b435-default-rtdb.firebaseio.com/${newEmail}/sent/${id}.json`
      );
      console.log(res);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getSentSingleData();
  }, []);

  if (loading) {
    return (
      <img
        style={{ display: "block", margin: "17% auto" }}
        width={"10%"}
        src="https://cdn.dribbble.com/users/919882/screenshots/2362441/loader-2.gif"
        alt="loading"
      />
    );
  }

  return (
    <div className="inbox-items">
      <p>To : {data.to}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Message : </p>
        <p dangerouslySetInnerHTML={{ __html: data.body }}></p>
      </div>
    </div>
  );
};

export default SingleSent;
