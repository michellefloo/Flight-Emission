import React from "react";

const TrashIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 3.99998H3.83333M3.83333 3.99998H14.5M3.83333 3.99998L3.83333 13.3333C3.83333 13.6869 3.97381 14.0261 4.22386 14.2761C4.47391 14.5262 4.81304 14.6666 5.16667 14.6666H11.8333C12.187 14.6666 12.5261 14.5262 12.7761 14.2761C13.0262 14.0261 13.1667 13.6869 13.1667 13.3333V3.99998M5.83333 3.99998V2.66665C5.83333 2.31302 5.97381 1.97389 6.22386 1.72384C6.47391 1.47379 6.81304 1.33331 7.16667 1.33331H9.83333C10.187 1.33331 10.5261 1.47379 10.7761 1.72384C11.0262 1.97389 11.1667 2.31302 11.1667 2.66665V3.99998M7.16667 7.33331V11.3333M9.83333 7.33331V11.3333"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashIcon;
