import React from "react";

const Cart = ({ className }) => {
  return (
    <span
      className={` relative flex items-center justify-center group ${className}`}
    >
      
      <svg
        className="text-[#02060cd0] group-hover:text-[#ff5200] transition-colors"
        viewBox="-1 0 37 32"
        height="20"
        width="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      >
        <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z" />
      </svg>

      
      <span className="absolute inset-0 flex items-center justify-center font-semibold group-hover:text-[#ff5200] transition-colors">
        0
      </span>
    </span>
  );
};

export default Cart;
