import React, { useState } from "react";
import SwiggyCoperate from "../svgicon/SwiggyCoperate";
import Search from "../svgicon/Search";
import Help from "../svgicon/Help";
import Offers from "../svgicon/Offers";
import SignIn from "../svgicon/SignIn";
import Logo from "../svgicon/Logo";
import Cart from "../svgicon/Cart";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);
  const navData = [
    {
      id: 0,
      title: "Swiggy Corporate",
      Icon: SwiggyCoperate,
      link: "/coperate",
    },
    {
      id: 1,
      title: "Search",
      Icon: Search,
      link: "/search",
    },
    {
      id: 2,
      title: "Offers",
      Icon: Offers,
      link: "/offers",
    },
    {
      id: 3,
      title: "Help",
      Icon: Help,
      link: "/help",
    },
    {
      id: 4,
      title: "Sign In",
      Icon: SignIn,
      link: "/signin",
    },
  ];

  return (
    <header className="text-base bg-white shadow-[0_15px_40px_-20px_rgba(40,44,63,.15)] p-4 lg:px-6 sticky top-0 z-10">
      <nav className="flex items-center justify-around lg:relative">
        <div className="flex gap-8 ">
          <Logo
            className={`transition-transform duration-200 ease-out hover:scale-105 cursor-pointer`}
          />

          <div className="flex group gap-2 items-center cursor-pointer  ">
            <span className="font-semibold group-hover:text-[#ff5200] border-b-2">
              Other
            </span>
            <span className="text-[rgba(2,6,12,.5)] truncate inline-block max-w-18 lg:inline lg:max-w-none">
              Borivali, Mumbai, Maharashtra, India
            </span>
            <span>
              <IoIosArrowDown
                className="text-[#ff5200] mt-1 cursor-pointer"
                size={20}
              />
            </span>
          </div>
        </div>

        <ul
          className={` ${isOpen ? "hidden" : "flex flex-col absolute lg:flex-row gap-10  top-20 left-0 right-0 px-8 p-4"} space-x-4 bg-white lg:static lg:flex justify-center lg:items-center gap-4 lg:gap-4 text-lg`}
        >
          {navData.map((e) => {
            return (
              <li className="font-semibold  text-[rgba(2,6,12,.9)] " key={e.id}>
                <NavLink className=" cursor-pointer flex gap-3 items-center group hover:text-[#ff5200] ">
                  {
                    <e.Icon className="text-[rgba(2,6,12,.9)] group-hover:text-[#ff5200]" />
                  }
                  {e.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="flex ml-auto lg:ml-0 group gap-2  hover:text-[#ff5200] font-semibold text-lg">
          <Cart className="cursor-pointer group-hover:text-[#ff5200]" />
          <span className=" hidden lg:block">cart</span>
        </div>
        <div className="lg:hidden pl-4">
          {isOpen ? (
            <HiMenuAlt1
              className="cursor-pointer"
              size={24}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          ) : (
            <MdClose
              onClick={() => setIsOpen(!isOpen)}
              size={24}
              className="cursor-pointer"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
