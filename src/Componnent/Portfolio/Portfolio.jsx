// import React from 'react'
// import img1 from "../imgs/images1.png";
// import img2 from "../imgs/images2.png";
// import img3 from "../imgs/images3.png";
// import { useEffect } from 'react';

// export default function Portfolio() {
//       useEffect(() => {
//         document.title = "Portfolio";
//       }, []);
//   return (
//     <div className="portfolio container start-0 end-0 top-0 bottom-0 pb-5 pt-5 mt-5">
//       <div className="portfolio-header text-center  ">
//         <h2>Portfolio Component</h2>
//         <div className="d-flex justify-content-center align-items-center">
//             <hr className="w-25 mx-2 border-dark" />
//             <span className="fs-4">⭐</span>
//             <hr className="w-25 mx-2 border-dark" />
//           </div>
//       </div>
//       <div className="row">
//         {/* Column 1 */}
//         <div className="col-md-4">
//           <div className="img-container">
//             <img src={img1} alt="Portfolio Item 1" className="img-fluid" />
//             <div className="img-info">
//               <h2>More</h2>
//             </div>
//           </div>
//         </div>

//         {/* Column 2 */}
//         <div className="col-md-4">
//           <div className="img-container">
//             <img src={img2} alt="Portfolio Item 2" className="img-fluid" />
//             <div className="img-info">
//               <h2>More</h2>
//             </div>
//           </div>
//         </div>

//         {/* Column 3 */}
//         <div className="col-md-4">
//           <div className="img-container">
//             <img src={img3} alt="Portfolio Item 3" className="img-fluid" />
//             <div className="img-info">
//               <h2>More</h2>
//             </div>
//           </div>
//         </div>

//         {/* Additional Columns */}
//         {[...Array(3)].map((_, index) => (
//           <div className="col-md-4" key={index}>
//             <div className="img-container ">
//               <img src={img1} alt={`Portfolio Item ${index + 4}`} className="img-fluid" />
//               <div className="img-info">
//                 <h2>More</h2>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import img1 from "../imgs/images1.png";
import img2 from "../imgs/images2.png";
import img3 from "../imgs/images3.png";
import { useState } from "react";

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null); // State to store the selected image

  const images = [
    { src: img1, alt: "Portfolio Item 1" },
    { src: img2, alt: "Portfolio Item 2" },
    { src: img3, alt: "Portfolio Item 3" },
    { src: img1, alt: "Portfolio Item 4" },
    { src: img2, alt: "Portfolio Item 5" },
    { src: img3, alt: "Portfolio Item 6" },
  ];

  const handleMoreClick = (image) => {
    setSelectedImg(image); // Set the clicked image as the selected image
  };

  const closeCard = () => {
    setSelectedImg(null); // Close the card by resetting the state
  };

  return (
    <div className="portfolio container pb-5 pt-5 mt-5">
      <div className="portfolio-header text-center">
        <h2>Portfolio Component</h2>
        <div className="d-flex justify-content-center align-items-center">
          <hr className="w-25 mx-2 border-dark " / >
          <i className="fa-solid fa-star fs-4 text-success" />
          <hr className="w-25 mx-2 border-dark" />
        </div>
      </div>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4" key={index}>
            <div className="img-container">
              <img src={image.src} alt={image.alt} className="img-fluid" />
              <div className="img-info">
                <h2 onClick={() => handleMoreClick(image)}>
                <i className="fa-solid fa-expand text-success " />

                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen image display */}
      {selectedImg && (
        <div className="fullscreen-overlay">
          <div className="fullscreen-content">
            <button className="close-btn" onClick={closeCard}>
              
              <i className="fa-solid fa-xmark  icon-x  translate-middle-y mb-1" />
            </button>
            <img src={selectedImg.src} alt={selectedImg.alt} className="fullscreen-img" />
          </div>
        </div>
      )}
    </div>
  );
}
