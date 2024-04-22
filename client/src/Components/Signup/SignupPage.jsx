import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth, db } from "../Login/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

import styles from "./Signup.module.css";

function Signup() {
  const getRole = () => {
    const role_value = () =>
      document.querySelector('input[name="flexRadioDefault"]:checked').value;
    return role_value() == "option1" ? "student" : "institution";
  };

  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    instituion: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    console.log(getRole());
    if (!values.name || !values.email || !values.instituion || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        await updateProfile(res.user, {
          displayName: values.name,
        });
        navigate("/");

        //Sending data to the firestore database
        try {
          // Use res.user.uid as the document ID
          const new_user = await setDoc(doc(db, "users", res.user.uid), {
            name: values.name,
            email: values.email,
            role: getRole(),
            instituion: values.instituion,
            password: values.pass,
          });
          console.log("Document written with ID: ", res.user.uid);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Student/Employer
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Instituition
            </label>
          </div>
        </>

        <InputControl
          label="Instituion"
          placeholder="Enter Institution Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, instituion: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
