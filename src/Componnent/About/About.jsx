import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  const description = [
    "Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.",
    "Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization."
  ];

  return (
    <>
      <div className="pt-5 about min-vh-100 d-flex flex-column justify-content-center align-items-center text-white">
        <div className="text-center mb-4">
          <h2 className="fw-bold">ABOUT COMPONENT</h2>
          <div className="d-flex justify-content-center align-items-center">
            <hr className="w-25 mx-2 border-white" />
            <i className="fa-solid fa-star fs-4 text-success" />
            <hr className="w-25 mx-2 border-white" />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-start w-75">
          {description.map((text, index) => (
            <p key={index} className="mx-3 text-center">
              {text}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
