// import React from "react";
// import React from "react";
export default function Footer() {
  return (
    <>
      <div className="footer container-fluid d-flex align-items-center m-0 justify-content-center bg-light text-dark">
        <div className="row container">
          {/* Address Section */}
          <div className="col-md-4">
            <div className="item text-center ">
              <h3>London</h3>
              <h6 className="fs-6 ">2215 John Daniel Drive</h6>
              <h6 className="fs-6 ">Clark, MO 65243</h6>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-4 text-center">
            <div className="item m-0">
              <h3>Follow Us</h3>
              <div className="footer-btn d-flex justify-content-center">
                {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, index) => (
                  <button
                    key={index}
                    className="ms-2 btn text-dark border-dark rounded-circle d-flex justify-content-center align-items-center"
                    style={{ width: "40px", height: "40px", fontSize: "20px" }}
                  >
                    <i className={`fa-brands fa-${icon}`}></i>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="col-md-4 ps-5">
            <div className="item text-center ">
              <h3>ABOUT FREELANCER</h3>
              <h6 className="fs-6 f" >Freelance is a free to use, licensed Bootstrap theme created by Route</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Nested Footer outside of main footer */}
      <div className="nested-footer p-3 text-center text-light w-100"style={{ background: "#1ABC9C" }}>
        <h6>Copyright © Your Website 2021</h6>
      </div>
    </>
  );
}
