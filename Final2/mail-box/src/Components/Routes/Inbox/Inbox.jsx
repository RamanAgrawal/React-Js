import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Inbox = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const email = useSelector((store) => {
    return store.auth.email;
  });
  const newEmail = email.replace("@", "").replace(".", "");
  const getData = async () => {
    try {
      let res = await axios.get(
        `https://mail-box-4b435-default-rtdb.firebaseio.com/${newEmail}/inbox.json`
      );
      setData(res.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let items = [];
  for (let key in data) {
    items.push({ id: key, ...data[key] });
  }

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

  console.log(items);

  return (
    <div>
      <h1>Your Inbox</h1>
      <div>
        {items.map((inbox) => {
          return (
            <div key={inbox.id}>
              <h1>{inbox.from}</h1>
              <p dangerouslySetInnerHTML={{ __html: inbox.body }}></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
