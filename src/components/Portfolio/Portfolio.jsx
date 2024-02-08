import React from "react";
import port1 from "./../../assets/images/poert1.png";
import port2 from "./../../assets/images/port2.png";
import port3 from "./../../assets/images/port3.png";
import porstyle from "./Portfolio.module.css"

export default function Portfolio() {
  return (
    <div className="p-5 min-vh-100 d-flex justify-content-center align-items-center portfolio">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-12 text-center mt-5 pt-5">
            <h1 className="fw-bolder text-uppercase customColor">
              Portfolio Component
            </h1>
            <div
              className={`starIcon customColor d-flex  justify-content-center align-items-center`}
            >
              <i className="fa-solid fa-star fs-6 mx-3"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="itemContent">
              <div
                data-bs-toggle="modal"
                data-bs-target="#portOne"
                className= {`${porstyle.item} rounded overflow-hidden position-relative`}
              >
                <div>
                  <img src={port1} alt="" className="w-100" />
                  </div>
                <div className={`${porstyle.overlaping} rounded   position-absolute top-0 bottom-0 left-0 right-0 w-100 d-flex justify-content-center align-items-center`}>
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>

              <div
                className={`modal fade ${porstyle.customColorModal}`}
                id="portOne"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg m-0 mx-auto h-100 d-flex justify-content-center align-items-center">
                  <div className="modal-content bg-transparent border-0 w-75">
                    <div className="modal-body">
                      <img src={port1} alt="" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="itemContent">
              <div
                data-bs-toggle="modal"
                data-bs-target="#portTwo"
                className= {`${porstyle.item} rounded overflow-hidden position-relative`}
              >
                <div>
                  <img src={port2} alt="" className="w-100" />
                  </div>
                <div className={`${porstyle.overlaping} rounded   position-absolute top-0 bottom-0 left-0 right-0 w-100 d-flex justify-content-center align-items-center`}>
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>

              <div
                className={`modal fade ${porstyle.customColorModal}`}
                id="portTwo"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg m-0 mx-auto h-100 d-flex justify-content-center align-items-center">
                  <div className="modal-content bg-transparent border-0 w-75">
                    <div className="modal-body">
                      <img src={port2} alt="" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="itemContent">
              <div
                data-bs-toggle="modal"
                data-bs-target="#portThree"
                className= {`${porstyle.item} rounded overflow-hidden position-relative`}
              >
                <div>
                  <img src={port3} alt="" className="w-100" />
                  </div>
                <div className={`${porstyle.overlaping} rounded   position-absolute top-0 bottom-0 left-0 right-0 w-100 d-flex justify-content-center align-items-center`}>
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>

              <div
                className={`modal fade ${porstyle.customColorModal}`}
                id="portThree"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg m-0 mx-auto h-100 d-flex justify-content-center align-items-center">
                  <div className="modal-content bg-transparent border-0 w-75">
                    <div className="modal-body">
                      <img src={port3} alt="" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="itemContent">
              <div
                data-bs-toggle="modal"
                data-bs-target="#port-One"
                className= {`${porstyle.item} rounded overflow-hidden position-relative`}
              >
                <div>
                  <img src={port1} alt="" className="w-100" />
                  </div>
                <div className={`${porstyle.overlaping} rounded   position-absolute top-0 bottom-0 left-0 right-0 w-100 d-flex justify-content-center align-items-center`}>
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>

              <div
                className={`modal fade ${porstyle.customColorModal}`}
                id="port-One"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg m-0 mx-auto h-100 d-flex justify-content-center align-items-center">
                  <div className="modal-content bg-transparent border-0 w-75">
                    <div className="modal-body">
                      <img src={port1} alt="" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="itemContent">
              <div
                data-bs-toggle="modal"
                data-bs-target="#port-Two"
                className= {`${porstyle.item} rounded overflow-hidden position-relative`}
              >
                <div>
                  <img src={port2} alt="" className="w-100" />
                  </div>
                <div className={`${porstyle.overlaping} rounded   position-absolute top-0 bottom-0 left-0 right-0 w-100 d-flex justify-content-center align-items-center`}>
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>

              <div
                className={`modal fade ${porstyle.customColorModal}`}
                id="port-Two"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg m-0 mx-auto h-100 d-flex justify-content-center align-items-center">
                  <div className="modal-content bg-transparent border-0 w-75">
                    <div className="modal-body">
                      <img src={port2} alt="" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="itemContent">
              <div
                data-bs-toggle="modal"
                data-bs-target="#port-Three"
                className= {`${porstyle.item} rounded overflow-hidden position-relative`}
              >
                <div>
                  <img src={port3} alt="" className="w-100" />
                  </div>
                <div className={`${porstyle.overlaping} rounded   position-absolute top-0 bottom-0 left-0 right-0 w-100 d-flex justify-content-center align-items-center`}>
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>

              <div
                className={`modal fade ${porstyle.customColorModal}`}
                id="port-Three"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg m-0 mx-auto h-100 d-flex justify-content-center align-items-center">
                  <div className="modal-content bg-transparent border-0 w-75">
                    <div className="modal-body">
                      <img src={port3} alt="" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
