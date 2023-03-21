import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { mailAction } from "../../Store/MailSlice";

const Singlemail = () => {
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [dataMail, setDataMail] = useState({
    from: ".",
    body: ".",
  });
  const email = useSelector((store) => {
    return store.auth.email;
  });
  const newEmail = email.replace("@", "").replace(".", "");

  const getData = async () => {
    setloading(true);
    try {
      let res = await axios.get(
        `https://mail-box-4b435-default-rtdb.firebaseio.com/${newEmail}/inbox/${id}.json`
      );
      dispatch(mailAction.mailRead({ id: id, mail: res.data }));
      setDataMail(res.data);
      console.log("res:", res);

      let res2 = await axios.put(
        `https://mail-box-4b435-default-rtdb.firebaseio.com/${newEmail}/inbox/${id}.json`,
        { body: res.data.body, from: res.data.from, read: true }
      );
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
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
      <p>From : {dataMail.from}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Message : </p>
        <p dangerouslySetInnerHTML={{ __html: dataMail.body }}></p>
      </div>
    </div>
  );
};

export default Singlemail;
