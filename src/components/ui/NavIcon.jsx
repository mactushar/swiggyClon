import React from "react";

import { GoArrowRight, GoArrowLeft } from "react-icons/go";
const NavIcon = () => {
  return (
    <>
      <div className=" flex justify-center items-center gap-2">
        <div className="w-9 h-9 bg-[rgba(2,6,12,0.15)] rounded-full flex justify-center items-center">
          <GoArrowLeft size={20} className="text-[rgba(2,6,12,0.92)]"/>
        </div>
        <div className="w-9 h-9 bg-[rgba(2,6,12,0.15)] rounded-full flex justify-center items-center">
          <GoArrowRight size={20} className="text-[rgba(2,6,12,0.92)]" />
        </div>
      </div>
    </>
  );
};

export default NavIcon;
