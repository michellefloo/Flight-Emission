import React from "react";

const HelpIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_48_568)">
        <path
          d="M7.57508 7.49996C7.771 6.94302 8.15771 6.47338 8.66671 6.17424C9.17571 5.87509 9.77416 5.76574 10.3561 5.86555C10.938 5.96536 11.4658 6.2679 11.846 6.71957C12.2262 7.17124 12.4343 7.74289 12.4334 8.33329C12.4334 9.99996 9.93341 10.8333 9.93341 10.8333M10.0001 14.1666H10.0084M18.3334 9.99996C18.3334 14.6023 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6023 1.66675 9.99996C1.66675 5.39759 5.39771 1.66663 10.0001 1.66663C14.6025 1.66663 18.3334 5.39759 18.3334 9.99996Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_48_568">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HelpIcon;
