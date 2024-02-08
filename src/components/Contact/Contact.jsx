import React, { useState } from "react";
import constyle from "./Contact.module.css";

export default function Contact() {
  const [nameinput, setnameinput] = useState(false);
  const [ageinput, setageinput] = useState(false);
  const [emailinput, setemailinput] = useState(false);
  const [passwordinput, setpasswordinput] = useState(false);

  function nameInput() {
    if (document.querySelector("#userName").value) {
      setnameinput(true);
    } else {
      setnameinput(false);
    }
  }
  function ageInput() {
    if (document.querySelector("#userAge").value) {
      setageinput(true);
    } else {
      setageinput(false);
    }
  }
  function emailInput() {
    if (document.querySelector("#userEmail").value) {
      setemailinput(true);
    } else {
      setemailinput(false);
    }
  }
  function passwordInput() {
    if (document.querySelector("#userPassword").value) {
      setpasswordinput(true);
    } else {
      setpasswordinput(false);
    }
  }

  return (
    <div className="Contact min-vh-100 p-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5 pt-5">
            <h1 className="fw-bolder text-uppercase customColor">
              Contact Section
            </h1>
            <div className="starIcon customColor d-flex  justify-content-center align-items-center">
              <i className="fa-solid fa-star fs-6 mx-3"></i>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="w-75 mx-auto">
              <label
                htmlFor="userName"
                className={`greenColor pb-3 position-relative   ${
                  constyle.inputLabel
                } ${nameinput ? constyle.active : ""}`}
              >
                userName:
              </label>
              <input
                id="userName"
                type="text"
                placeholder="userName"
                className={`border-0  border-bottom  form-control rounded-2 py-3 ${constyle.labelinput} placeholder-lg`}
                onInput={nameInput}
              />
              <label htmlFor="userAge" className={`greenColor pb-3 position-relative   ${
                  constyle.inputLabel
                } ${ageinput ? constyle.active : ""}`}>
                userAge:
              </label>
              <input
                type="text"
                id="userAge"
                placeholder="userAge"
                className={`border-0  border-bottom  form-control rounded-2 py-3 ${constyle.labelinput} placeholder-lg`}
                onInput={ageInput}
              />
              <label htmlFor="userEmail" className={`greenColor pb-3 position-relative ${
                  constyle.inputLabel
                } ${emailinput ? constyle.active : ""}`}>
                userEmail:
              </label>
              <input
                type="text"
                id="userEmail"
                placeholder="userEmail"
                className={`border-0  border-bottom  form-control rounded-2 py-3 ${constyle.labelinput} placeholder-lg`}
                onInput={emailInput}
              />
              <label htmlFor="userPassword" className={`greenColor pb-3 position-relative   ${
                  constyle.inputLabel
                } ${passwordinput ? constyle.active : ""}`}>
                userPassword:
              </label>
              <input
                type="text"
                id="userPassword"
                placeholder="userPassword"
                className={`border-0  border-bottom  form-control rounded-2 py-3 ${constyle.labelinput} placeholder-lg`}
                onInput={passwordInput}
              />
              <button className="btn bgCustom text-white my-4">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
