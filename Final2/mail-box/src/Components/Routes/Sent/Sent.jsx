import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sent = () => {
  const [loading, setLoading] = useState(false);
  const email = useSelector((store) => {
    return store.auth.email;
  });
  const [data, setData] = useState([]);
  const newEmail = email.replace("@", "").replace(".", "");

  const getSentData = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `https://mail-box-4b435-default-rtdb.firebaseio.com/${newEmail}/sent.json`
      );
      console.log(res);
      setLoading(false);
      setData(res.data);
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  };

  let items = [];
  for (let key in data) {
    items.push({ id: key, ...data[key] });
  }
  //   console.log("items:", items);

  useEffect(() => {
    getSentData();
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
    <div>
      {items.map((mails) => {
        return (
          <div key={mails.id} className="inbox-items">
            <p>TO : {mails.to}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <p>Message : </p>
              <p dangerouslySetInnerHTML={{ __html: mails.body }}></p>
            </div>
            <Link className="read" to={`/sent/${mails.id}`}>
              Read Mail
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sent;
