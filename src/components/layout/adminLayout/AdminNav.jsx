import { AiOutlineUser } from "react-icons/ai"; 

import { IoMdNotificationsOutline } from "react-icons/io";

import Field from "../forms/Field";
import { HiOutlineBars4 } from "react-icons/hi2";
import { HiOutlineMoon } from "react-icons/hi2";
import Logo from "../../svgicon/Logo";



const AdminNav = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-4 border-b py-2 border-[#e4e7ec] text-[rgb(63,64,66)]">
        <div className="flex justify-center items-center space-x-14">
         
          <Logo/>
           <HiOutlineBars4 size={25} className="ml-auto"/>
        </div>

        <div>
         <input type="text" placeholder="Search here" className="outline-2 rounded-md outline-[#e4e7ec] px-2 py-1 w-64"/>
        </div>
        <div className="flex space-x-4 justify-center items-center">
          <div>
            <HiOutlineMoon size={25} />
          </div>
          <div>
            <IoMdNotificationsOutline size={25}/>
          </div>
          <div className="flex items-center justify-center px-2">
            <AiOutlineUser size={25} />
           
            <p className="font-medium">Tushar machhi</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNav;
