// import React from 'react'

import React from "react";
import Swal from "sweetalert2";

export default function Not_found() {
  React.useEffect(() => {
    Swal.fire({
      icon: "error",
      title: "Page not found",
      text: "Something went wrong!",
    });
  }, []);

  return <div>Page Not Found</div>;
}
