import React, { useRef } from "react";
import JoditEditor from "jodit-react";
const MailBox = () => {
  const to = useRef();
  const area = useRef();
  return (
    <>
      <h1>Mail</h1>
      <div className="mail">
        <div>
          <input type="text" placeholder="To" ref={to} />
        </div>
        <JoditEditor ref={area} />
      </div>
      <button className="btn">Send</button>
    </>
  );
};

export default MailBox;
