
// import React from "react";

// const Modal = ({ isVisible, handleCloseModal, children }) => {
//   if (!isVisible) return null;

//   return (
//     <div className="fixed   inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
//       <div >
//         <button
//           onClick={handleCloseModal}
//           className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
//         >
//           &times;
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React, { useEffect } from "react";

const Modal = ({ isVisible, handleCloseModal, children }) => {
  useEffect(() => {
    // Disable scroll when modal is visible
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
    style={{zIndex:'900'}}
    >
      <div className="relative  p-6 rounded-lg">
        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

