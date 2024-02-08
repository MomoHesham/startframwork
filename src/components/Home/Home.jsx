import React from "react";
import avatar from "./../../assets/images/avatar.png";



export default function Home() {
  return (
    <div className="home bgCustom overflow-hidden min-vh-100 d-flex justify-content-center align-items-center p-5">
      <div className="container p-5">
        <div className="col-md-12 text-center mt-5">
          <div>
            <img src={avatar} alt="" className="w-25 rounded-circle" />
            <h1 className="text-white fw-bolder text-uppercase mt-3">
              Start Framework
            </h1>
            <div className={`starIcon d-flex  justify-content-center align-items-center text-white`}>
              <i className="fa-solid fa-star fs-6 text-white mx-3"></i>
            </div>
            <p className="text-white mt-3">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
