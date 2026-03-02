import { AiOutlineSetting } from "react-icons/ai"; 

import { RiRestaurant2Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { IoRestaurantOutline } from "react-icons/io5";

import { RxDashboard } from "react-icons/rx";
import Item from "./Item";

const SideBarItem = () => {
  const item = [
  {
    id: 0,
    title: "Dashboard",
    link: ".",
    Icon: RxDashboard,
  },

  {
    id: 1,
    title: "Restaurant",
    Icon: RiRestaurant2Line,

    children: [
      {
        id: "1-1",
        title: "All Restaurants",
        link: "restaurant",
        Icon: RiRestaurant2Line,
      },

      {
        id: "1-2",
        title: "Add Restaurant",
        link: "restaurant/add",
        Icon: IoRestaurantOutline,
      },
    ],
  },

  {
    id: 2,
    title: "Users",
    link: "users",
    Icon: BiUser,
  },
];


  return (
    <>
      <div className=" h-screen border-r border-[#e4e7ec] text-[rgb(63,64,66)] p-2 py-4 w-64">
        {item.map((el) => {
          return <Item {...el} key={el.id} />;
        })}
      </div>
    </>
  );
};

export default SideBarItem;
