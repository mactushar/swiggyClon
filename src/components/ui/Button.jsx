import React from "react";

const Button = ({ type, children,className }) => {
  return (
    <>
      <div>
        <button className={` ${className}`} type={type}>{children}</button>
      </div>
    </>
  );
};

export default Button;
