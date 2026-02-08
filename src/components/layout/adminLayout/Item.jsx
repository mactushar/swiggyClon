import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Item = ({ title, Icon, link, children }) => {
  const [open, setIsOpen] = useState(false);

  const hasChildren = children && children.length > 0;

  const getNavClass = ({ isActive }) => {
    return `flex gap-4 px-6 py-2 my-1 font-medium rounded-md
      ${
        isActive
          ? "bg-[#FF5200] text-white"
          : "hover:bg-[#FF5200] hover:text-white"
      }`;
  };

  
  if (hasChildren) {
    return (
      <>
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="flex w-full gap-4 px-6 py-2 my-1 font-medium rounded-md hover:bg-[#FF5200] hover:text-white"
        >
          <Icon size={20} />
          <span className="flex-1 text-left">{title}</span>
          <BiChevronDown
            size={20}
            className={`transition ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="pl-8">
            {children.map((data) => (
              <Item key={data.id} {...data} />
            ))}
          </div>
        )}
      </>
    );
  }

  
  return (
    <NavLink
      to={link}
      className={getNavClass}
      end={link === "." || link === "restaurant"} 
    >
      <Icon size={20} />
      <span>{title}</span>
    </NavLink>
  );
};

export default Item;
