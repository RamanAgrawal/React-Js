import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mailAction } from "../../Store/MailSlice";
import { AiFillDelete } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
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

  const handleDelete = async (id) => {
    console.log(id);
    dispatch(mailAction.delete(id));
    try {
      let res = await axios.delete(
        `https://mail-box-client-4b607-default-rtdb.firebaseio.com/${newEmail}/inbox/${id}.json`
      );
      console.log(res);
      toast.success("Mail-Deleted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
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
      <h1>
        Your Inbox has {unread} Unread Email's {unread > 0 ? "😍" : "😥"}
      </h1>
      <div>
        {Object.keys(inbox).length === 0 ? <p>Your Inbox Is Empty 😢</p> : ""}
      </div>
      <div className="inbox">
        {Object.keys(inbox).map((items) => {
          return (
            <div key={items} className="inbox-items">
              <AiFillDelete
                className="delete"
                onClick={() => handleDelete(items)}
              />
              <p style={{ display: "flex", gap: "10px" }}>
                <p>{!inbox[items].read && <p>💎</p>}</p>
                <p> From : {inbox[items].from}</p>
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <p>Message : </p>
                <p dangerouslySetInnerHTML={{ __html: inbox[items].body }}></p>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Inbox;
