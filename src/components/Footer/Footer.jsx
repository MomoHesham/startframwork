import React from "react";
import fostyle from './Footer.module.css';

export default function Footer() {
  return (
    <div className="footer ">
      <div className="container-fluid p-5 customBg text-white">
        <div className="row text-center">
          <div className="col-md-4 p-3">
            <h3 className="text-uppercase fw-bolder">Location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 p-3">
            <h3 className="text-uppercase fw-bolder">Around The Web</h3>
            <div className="social">
              <ul className="d-flex justify-content-center p-0">
                <li className={`${fostyle.socialIcon} list-group-item border border-black p-2 border-white rounded-circle  mx-2 d-flex justify-content-center align-items-center`}>
                  <i className="fa-brands fa-facebook fs-5 "></i>
                </li>
                <li className={`${fostyle.socialIcon} list-group-item border border-black p-2 border-white rounded-circle  mx-2 d-flex justify-content-center align-items-center`}>
                  <i className="fa-brands fa-twitter fs-5"></i>
                </li>
                <li className={`${fostyle.socialIcon} list-group-item border border-black p-2 border-white rounded-circle  mx-2 d-flex justify-content-center align-items-center`}>
                  <i className="fa-brands fa-linkedin-in fs-5"></i>
                </li>
                <li className={`${fostyle.socialIcon} list-group-item border border-black p-2 border-white rounded-circle  mx-2 d-flex justify-content-center align-items-center`}>
                  <i className="fa-solid fa-globe fs-5"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <h3 className="text-uppercase fw-bolder">About Freelancer</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark">
        <div className="row py-3 text-center text-white ">
          <div className="col-12">
            <div>
              <p className="m-0">Copyright © Your Website 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
