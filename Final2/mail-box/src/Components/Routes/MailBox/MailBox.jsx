import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const MailBox = () => {
  const to = useRef();
  const area = useRef();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const email = useSelector((store) => {
    return store.auth.email;
  });
  const handleSend = async () => {
    const toEmail = to.current.value;
    const toArea = area.current.value;
    const fromMail = toEmail.replace("@", "").replace(".", "");
    const toMail = toEmail.replace("@", "").replace(".", "");
    const obj = {
      to: toEmail,
      body: toArea,
    };
    try {
      setLoading(true);
      let res = await axios.post(
        `https://mail-box-4b435-default-rtdb.firebaseio.com/${fromMail}/sent.json`,
        obj
      );
      setLoading(false);
      toast.success("Mail-Sent", {
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
      setLoading(false);
      console.log("error:", error);
    }

    const obj2 = {
      from: email,
      body: toArea,
    };

    try {
      setLoading(true);
      let res = await axios.post(
        `https://mail-box-4b435-default-rtdb.firebaseio.com/${toMail}/inbox.json`,
        obj2
      );
      setLoading(false);
      console.log(res);
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  };

  const handleCOmpose = () => {
    setShow(!show);
  };

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
    <>
      <div style={{ padding: "40px" }}>
        <Link to={"/inbox"}>
          <button className="btn" style={{ float: "right" }}>
            Your Inbox
          </button>
        </Link>
        <button
          onClick={handleCOmpose}
          className="btn"
          style={{ float: "left" }}
        >
          Compose
        </button>
        {!show && <h1>Click On Compose To Send EMail's 💌</h1>}
        {show && (
          <div>
            <h1 style={{ color: "Blue" }}>
              Connect With Your Friends And Family
            </h1>
            <div className="mail">
              <div>
                <input type="text" placeholder="To" ref={to} />
              </div>
              <JoditEditor ref={area} />
            </div>
            <button className="btn" onClick={handleSend}>
              Send
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default MailBox;
