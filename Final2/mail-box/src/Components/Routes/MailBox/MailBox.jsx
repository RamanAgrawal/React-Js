import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { mailAction } from "../../Store/MailSlice";
const MailBox = () => {
  const toEMail = useRef();
  const areaRef = useRef();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const email = useSelector((store) => {
    return store.auth.email;
  });
  const handleSend = async () => {
    const to = toEMail.current.value;
    const body = areaRef.current.value;
    const fromMail = email.replace("@", "").replace(".", "");
    console.log("fromMail:", fromMail);
    const toMail = to.replace("@", "").replace(".", "");
    console.log("toMail:", toMail);
    const obj = {
      to: to,
      body: body,
    };
    try {
      setLoading(true);
      let res = await axios.post(
        `https://mail-box-4b435-default-rtdb.firebaseio.com/${fromMail}/sent.json`,
        obj
      );
      dispatch(
        mailAction.mailSent({
          id: res.data.name,
          mail: { to: to, body: body },
        })
      );
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
      body: body,
      read: false,
    };

    try {
      setLoading(true);
      let res = await axios.post(
        `https://mail-box-4b435-default-rtdb.firebaseio.com/${toMail}/inbox.json`,
        obj2
      );
      dispatch(mailAction.sent({}));
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
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            onClick={handleCOmpose}
            className="btn"
            style={{ float: "left", width: "10%" }}
          >
            Compose
          </button>
          <Link to={"/inbox"}>
            <button className="btn" style={{ float: "left", width: "10%" }}>
              Your Inbox
            </button>
          </Link>
          <Link to={"/sent"}>
            <button className="btn" style={{ float: "left", width: "10%" }}>
              Sent Inbox
            </button>
          </Link>
        </div>
        {!show && <h1>Click On Compose To Send Email's 💌</h1>}
        {show && (
          <div>
            <h1 style={{ color: "grey" }}>
              Connect With Your Friends And Family 👪
            </h1>
            <div className="mail">
              <div>
                <input type="text" placeholder="To" ref={toEMail} />
              </div>
              <JoditEditor ref={areaRef} />
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
