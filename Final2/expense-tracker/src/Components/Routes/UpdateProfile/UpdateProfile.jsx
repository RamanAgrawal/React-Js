import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

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
        setLoading(true);
        let res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCFrmedDfSLLubh6dopFm8w_kt-t0eGWRA",
          {
            idToken: JSON.parse(localStorage.getItem("token")),
            displayName: name,
            photoUrl: url,
            returnSecureToken: true,
          }
        );
        setLoading(false);
        toast.success("Profile--Updated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(res);
      } catch (error) {
        setLoading(false);
        console.log("error:", error);
      }
    }
  };

  async function getData() {
    try {
      setLoading(true);
      let res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCFrmedDfSLLubh6dopFm8w_kt-t0eGWRA",
        {
          idToken: JSON.parse(localStorage.getItem("token")),
        }
      );
      setLoading(false);
      console.log(res);
      setName(res.data.users[0].displayName || "");
      setUrl(res.data.users[0].photoUrl || "");
      localStorage.setItem("photo", JSON.stringify(res.data.users[0].photoUrl));
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  }

  const handleConfirmEmail = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCFrmedDfSLLubh6dopFm8w_kt-t0eGWRA",
        {
          requestType: "VERIFY_EMAIL",
          idToken: JSON.parse(localStorage.getItem("token")),
        }
      );
      toast.success("Mail--Sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <img
        src="https://media.tenor.com/1s1_eaP6BvgAAAAC/rainbow-spinner-loading.gif"
        alt="image"
      ></img>
    );
  }

  return (
    <>
      <h1>Update Profile</h1>
      <form>
        <input
          value={name}
          onChange={handleName}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={url}
          onChange={handleUrl}
          type="text"
          placeholder="Profile URL"
        />
        <input onClick={handleSubmit} type="submit" value={"Update"} />
        <input
          onClick={handleConfirmEmail}
          type="submit"
          value={"Confirm Email"}
        />
      </form>
      <ToastContainer />
    </>
  );
};

export default UpdateProfile;
