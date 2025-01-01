import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const ContactSection = () => {
  useEffect(() => {
    document.title = "contact";
  }, []);

  return (
    <div className="container mt-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center p-5 mt-5">
            <h2 className="fw-bold">CONTACT SECTION</h2>
            <div className="d-flex justify-content-center align-items-center">
              <hr className="w-25 mx-2 border-dark" />
          <i className="fa-solid fa-star fs-4 text-success" />

              <hr className="w-25 mx-2 border-dark" />
            </div>
          </div>
          <form>
            <div className="mb-3">
              <input 
                placeholder="Enter Your UserName" 
                type="text" 
                className="form-control focus:outline-none border-top-0 border-start-0 border-end-0 mb-4" 
                id="userName" 
                name="userName" 
              />
            </div>
            <div className="mb-3">
              <input 
                placeholder="Enter Your Age" 
                type="number" 
                className="form-control focus:outline-none border-top-0 border-start-0 border-end-0 mb-4" 
                id="userAge" 
                name="userAge" 
              />
            </div>
            <div className="mb-3">
              <input 
                placeholder="Enter Your E-mail" 
                type="email" 
                className="form-control focus:outline-none border-top-0 border-start-0 border-end-0 mb-4" 
                id="userEmail" 
                name="userEmail" 
              />
            </div>
            <div className="mb-3">
              <input 
                placeholder="Enter Your Password" 
                type="password" 
                className="form-control focus:outline-none border-top-0 border-start-0 border-end-0 mb-4" 
                id="userPassword" 
                name="userPassword" 
              />
            </div>
            <button type="submit" className="btn btn-contact" style={{ background: "#1ABC9C" }}>
              send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
