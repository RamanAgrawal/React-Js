import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mailAction } from "../../Store/MailSlice";

const Inbox = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const inbox = useSelector((store) => {
    return store.mail.inbox;
  });
  const email = useSelector((store) => {
    return store.auth.email;
  });
  const newEmail = email.replace("@", "").replace(".", "");
  const getData = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `https://mail-box-4b435-default-rtdb.firebaseio.com/${newEmail}/inbox.json`
      );
      if (res.data) {
        dispatch(mailAction.mailInbox(res.data));
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(inbox);

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

  let unread = 0;
  Object.keys(inbox).forEach((items) => {
    if (inbox[items].read === false) {
      unread++;
    }
  });

  return (
    <div>
      <h1>Your Inbox has {unread} Unread Email's 😥</h1>
      <div>
        {Object.keys(inbox).length === 0 ? <p>Your Inbox Is Empty 😢</p> : ""}
      </div>
      <div>
        {Object.keys(inbox).map((items) => {
          return (
            <div>
              <h1>
                {!inbox[items].read && <p>💎</p>}
                <p>{inbox[items].from}</p>
              </h1>
              <p dangerouslySetInnerHTML={{ __html: inbox[items].body }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
