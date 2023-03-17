import axios from "axios";
import React, { useState } from "react";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || url === "") {
      alert("Please Fill All Fields");
    } else {
      try {
        let res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCFrmedDfSLLubh6dopFm8w_kt-t0eGWRA",
          {
            idToken: JSON.parse(localStorage.getItem("token")),
            displayName: name,
            photoUrl: url,
            returnSecureToken: true,
          }
        );
        console.log(res);
      } catch (error) {
        console.log("error:", error);
      }
    }
  };

  return (
    <>
      <h1>Update Profile</h1>
      <form>
        <input onChange={handleName} type="text" placeholder="Full Name" />
        <input onChange={handleUrl} type="text" placeholder="Profile URL" />
        <input onClick={handleSubmit} type="submit" value={"Update"} />
      </form>
    </>
  );
};

export default UpdateProfile;
