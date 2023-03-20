import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useSelector } from "react-redux";
const MailBox = () => {
  const to = useRef();
  const area = useRef();
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
      let res = await axios.post(
        `https://mail-box-4b435-default-rtdb.firebaseio.com/${fromMail}/sent.json`,
        obj
      );
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }

    const obj2 = {
      from: email,
      body: toArea,
    };

    try {
      let res = await axios.post(
        `https://mail-box-4b435-default-rtdb.firebaseio.com/${toMail}/indox.json`,
        obj2
      );
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <>
      <h1>Mail</h1>
      <div className="mail">
        <div>
          <input type="text" placeholder="To" ref={to} />
        </div>
        <JoditEditor ref={area} />
      </div>
      <button className="btn" onClick={handleSend}>
        Send
      </button>
    </>
  );
};

export default MailBox;
