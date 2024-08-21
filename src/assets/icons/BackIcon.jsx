import React from "react";

const BackIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_311_56)">
        <path
          d="M8.00004 5.33334L5.33337 8M5.33337 8L8.00004 10.6667M5.33337 8H10.6667M14.6667 8C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8C1.33337 4.3181 4.31814 1.33334 8.00004 1.33334C11.6819 1.33334 14.6667 4.3181 14.6667 8Z"
          stroke={color}
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_311_56">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BackIcon;
