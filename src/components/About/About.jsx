import React from "react";

export default function About() {
  return (
    <div className="about bgCustom overflow-hidden min-vh-100 d-flex justify-content-center align-items-center p-5">
      <div className="container p-5">
        <div className="col-md-12  mt-5">
          <div>
            <h1 className="text-white fw-bolder text-uppercase mt-3 text-center">
              About Component
            </h1>
            <div
              className={`starIcon d-flex  justify-content-center align-items-center text-white`}
            >
              <i className="fa-solid fa-star fs-6 text-white mx-3"></i>
            </div>
            <div className="row pt-3">
              <div className="col-md-6">
                <p className="text-white">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p className="text-white">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
