import React from "react";

export default function cdate() {
    const current = new Date();
    const monthNames = [
        "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = `${current.getDate()} ${
    monthNames[current.getMonth()]
  }, ${current.getFullYear()}`;

  return (
    <div>
      {date}
    </div>
    
  );

    
}